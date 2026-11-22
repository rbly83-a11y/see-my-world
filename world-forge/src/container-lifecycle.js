// Read-only lifecycle evidence. PREPARED is only a local intent, not proof of Docker creation.
// Never infer ABSENT from a failed inspect command: the daemon may be unavailable.
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {verifyContainerOwnership} from './container-ownership.js';
const execute=promisify(execFile);
const NAME=/^world-forge-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const ID=/^[a-f0-9]{64}$/;

export async function inspectExecutionLifecycle(lease,identity,{exec=execute}={}){
  if(!lease||!['CLAIMED','ACTIVE','RELEASED'].includes(lease.status))throw Error('Invalid execution lease');
  if(!lease.container_name){
    return {jobId:lease.job_id,state:'CLAIMED',verified:false,reason:'NO_CONTAINER_REGISTERED'};
  }
  const name=lease.container_name;
  if(!NAME.test(name))throw Error('Invalid registered container name');
  if(identity?.jobId!==lease.job_id||identity?.leaseToken!==lease.token)throw Error('Execution identity does not match lease');
  const ownership=await verifyContainerOwnership(name,identity,{exec});
  if(ownership.verified){
    return {jobId:lease.job_id,containerName:name,containerId:ownership.containerId,
      state:ownership.running?'RUNNING':'CREATED_OR_STOPPED',verified:true,
      reason:ownership.running?'DOCKER_RUNNING':'DOCKER_PRESENT'};
  }
  // A listing can distinguish absence from an inspect failure, but only after
  // the daemon responds successfully. It cannot prove that cleanup was safe.
  if(ownership.reason!=='INSPECTION_UNAVAILABLE'){
    return {jobId:lease.job_id,containerName:name,state:'UNVERIFIED',verified:false,reason:ownership.reason};
  }
  try{
    const {stdout}=await exec('docker',['ps','-a','--no-trunc','--format','{{.ID}} {{.Names}}'],{timeout:15000,maxBuffer:1048576});
    if(typeof stdout!=='string')throw Error('Invalid Docker listing');
    const lines=stdout.split(/\r?\n/).filter(Boolean);
    if(lines.some(line=>{const parts=line.split(' ');return ID.test(parts[0])&&parts.slice(1).join(' ')===name;})){
      return {jobId:lease.job_id,containerName:name,state:'UNVERIFIED',verified:false,reason:'PRESENT_BUT_UNINSPECTABLE'};
    }
    if(lines.some(line=>!/^([a-f0-9]{64}) (\S+)$/.test(line)))throw Error('Malformed Docker listing');
    return {jobId:lease.job_id,containerName:name,state:'ABSENT',verified:true,reason:'ABSENT_FROM_RESPONSIVE_DOCKER'};
  }catch{
    return {jobId:lease.job_id,containerName:name,state:'UNVERIFIED',verified:false,reason:'DOCKER_UNAVAILABLE'};
  }
}
