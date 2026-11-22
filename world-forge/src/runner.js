// Explicit opt-in, fail-closed OCI execution adapter. Not an AI agent orchestrator.
import { realpath, stat, mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { resolve, relative, sep } from 'node:path';
import { randomUUID } from 'node:crypto';
import {ownershipLabels} from './container-ownership.js';

const IMAGE=/^[a-z0-9][a-z0-9._/-]*(?::[a-z0-9._-]+)?@sha256:[a-f0-9]{64}$/;
const COMMANDS=new Map([['test',['node','--test']],['version',['node','--version']]]);
const inside=(base,p)=>{const r=relative(base,p);return r!==''&&!r.startsWith('..'+sep)&&r!=='..'&&!r.startsWith(sep);};
export async function buildSandboxInvocation(plan, config) {
  if(plan?.mode!=='PREFLIGHT_ONLY'||plan.executionAuthorized!==false||plan.networkAccess!==false||plan.secretAccess!==false||plan.productionAccess!==false)throw Error('Preflight plan required');
  if(!IMAGE.test(config?.image||''))throw Error('Image must be pinned by sha256 digest');
  if(!COMMANDS.has(config.command))throw Error('Command not allowlisted');
  const workspace=await realpath(config.workspace);
  const output=await realpath(config.output);
  if(workspace===output||inside(workspace,output)||inside(output,workspace))throw Error('Workspace and output must be disjoint');
  if(!(await stat(workspace)).isDirectory()||!(await stat(output)).isDirectory())throw Error('Mounts must be directories');
  if(!Array.isArray(plan.writablePaths)||!plan.writablePaths.length)throw Error('Missing bounded scope');
  // The workspace is mounted read-only. No writable source paths are mounted into the container.
  // The output mount is the sole writable volume and contains only generated artifacts.
  const name='world-forge-'+randomUUID();
  // Supervised jobs must bind both the job and lease to Docker metadata.
  if((config.jobId===undefined)!==(config.leaseToken===undefined))throw Error('Job and lease identity must be supplied together');
  const labels=config.jobId===undefined?null:ownershipLabels({jobId:config.jobId,leaseToken:config.leaseToken});
  const args=['run','--rm','--name',name,'--network','none','--read-only','--cap-drop','ALL',
    '--security-opt','no-new-privileges','--pids-limit','64','--memory','512m','--cpus','1',
    '--user','65534:65534','--workdir','/workspace',
    ...(labels?Object.entries(labels).flatMap(([key,value])=>['--label',`${key}=${value}`]):[]),
    '--mount',`type=bind,src=${workspace},dst=/workspace,readonly`,
    '--mount',`type=bind,src=${output},dst=/output`,
    '--tmpfs','/tmp:rw,noexec,nosuid,size=32m',
    '--env','HOME=/tmp','--env','NODE_OPTIONS=--no-warnings',
    config.image,...COMMANDS.get(config.command)];
  return Object.freeze({binary:'docker',args,containerName:name,timeoutMs:Math.min(Math.max(config.timeoutMs??30000,1000),120000),workspace,output});
}
export async function runIsolated(plan, config, {spawnImpl=spawn}={}) {
  if(config?.execute!==true)throw Error('Execution requires explicit execute:true');
  const invocation=await buildSandboxInvocation(plan,config);
  // Persist the chosen container name before spawning Docker. A failed spawn
  // leaves an auditable lease requiring reconciliation, not an invisible process.
  if(config.onContainerPrepared!==undefined){
    if(typeof config.onContainerPrepared!=='function')throw Error('Invalid container preparation callback');
    await config.onContainerPrepared(invocation.containerName);
  }
  return await new Promise((resolvePromise,reject)=>{
    let child;let settled=false;let closed=false;let closeValue=null;let startupPending=false;let startupError=null;let stdout='';let stderr='';
    const finish=(err,value)=>{if(settled)return;settled=true;clearTimeout(timer);err?reject(err):resolvePromise(value);};
    const complete=()=>{if(!closed||startupPending||settled)return;if(startupError)return finish(startupError);finish(null,closeValue);};
    try{child=spawnImpl(invocation.binary,invocation.args,{shell:false,env:{PATH:process.env.PATH||'/usr/bin:/bin'},stdio:['ignore','pipe','pipe']});}
    catch(e){return reject(e);}
    const timer=setTimeout(()=>{child.kill('SIGKILL');finish(Error('Sandbox timed out; container may require manual cleanup'))},invocation.timeoutMs);
    child.stdout?.on('data',chunk=>{stdout=(stdout+chunk.toString()).slice(-65536)});
    child.stderr?.on('data',chunk=>{stderr=(stderr+chunk.toString()).slice(-65536)});
    child.on('spawn',()=>{
      if(typeof config.onDockerCliSpawned==='function'){
        startupPending=true;
        Promise.resolve().then(()=>config.onDockerCliSpawned(invocation.containerName)).then(()=>{
          startupPending=false;complete();
        },error=>{startupError=error;startupPending=false;child.kill('SIGKILL');finish(error);});
      }
    });
    child.on('error',e=>finish(e));
    child.on('close',(code,signal)=>{closed=true;closeValue={exitCode:code,signal,stdout,stderr,success:code===0,mode:'OCI_CONTAINER'};complete();});
  });
}
