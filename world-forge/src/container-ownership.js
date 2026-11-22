// Fail-closed Docker ownership verification. Never infer ownership from a name alone.
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const execute=promisify(execFile);
const NAME=/^world-forge-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const DIGEST=/^[a-f0-9]{64}$/;
const ID=/^[a-f0-9]{64}$/;
export const ownershipLabels=({jobId,leaseToken})=>{
  if(typeof jobId!=='string'||!/^JOB-[0-9a-f-]{36}$/.test(jobId))throw Error('Invalid job ID');
  if(typeof leaseToken!=='string'||!/^[0-9a-f-]{36}$/.test(leaseToken))throw Error('Invalid lease token');
  return Object.freeze({'world-forge.job-id':jobId,'world-forge.lease-sha256':createHash('sha256').update(leaseToken).digest('hex')});
};
export async function verifyContainerOwnership(containerName,identity,{exec=execute}={}){
  if(!NAME.test(containerName||''))throw Error('Unsafe container name');
  const expected=ownershipLabels(identity);
  let stdout;
  try{({stdout}=await exec('docker',['inspect','--type=container','--format','{{json .}}',containerName],{timeout:15000,maxBuffer:1048576}));}
  catch{return {verified:false,reason:'INSPECTION_UNAVAILABLE'};}
  let data;
  try{data=JSON.parse(stdout);}catch{return {verified:false,reason:'MALFORMED_INSPECTION'};}
  if(!data||data.Name!=='/'+containerName||!ID.test(data.Id||'')||typeof data.State?.Running!=='boolean')return {verified:false,reason:'INVALID_CONTAINER_IDENTITY'};
  const labels=data.Config?.Labels;
  if(!labels||labels['world-forge.job-id']!==expected['world-forge.job-id']||labels['world-forge.lease-sha256']!==expected['world-forge.lease-sha256'])return {verified:false,reason:'OWNERSHIP_MISMATCH'};
  if(identity.imageDigest!==undefined){
    if(!DIGEST.test(identity.imageDigest)||data.Image!==identity.imageDigest)return {verified:false,reason:'IMAGE_MISMATCH'};
  }
  return {verified:true,containerName,containerId:data.Id,running:data.State.Running};
}
export async function stopOwnedContainer(containerName,identity,{exec=execute}={}){
  const before=await verifyContainerOwnership(containerName,identity,{exec});
  if(!before.verified)return {confirmed:false,reason:before.reason};
  try{await exec('docker',['rm','--force',before.containerId],{timeout:15000,maxBuffer:65536});}
  catch{return {confirmed:false,reason:'STOP_FAILED'};}
  try{
    const {stdout}=await exec('docker',['ps','-a','--no-trunc','--format','{{.ID}} {{.Names}}'],{timeout:15000,maxBuffer:1048576});
    if(typeof stdout!=='string')throw Error('Invalid listing');
    const rows=stdout.split(/\r?\n/).filter(Boolean);
    if(rows.some(line=>line===before.containerId+' '+containerName||line.startsWith(before.containerId+' ')||line.endsWith(' '+containerName)))return {confirmed:false,reason:'STILL_PRESENT'};
    return {confirmed:true,reason:'VERIFIED_ABSENT',containerName,containerId:before.containerId};
  }catch{return {confirmed:false,reason:'POST_INSPECTION_UNAVAILABLE'};}
}
