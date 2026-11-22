// Opt-in live Docker acceptance test. Uses a pinned locally available image;
// never pulls, never uses the network, and never touches production containers.
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {randomUUID} from 'node:crypto';
import {ownershipLabels,verifyContainerOwnership,stopOwnedContainer} from '../src/container-ownership.js';
const exec=promisify(execFile);
const run=(args,timeout=15000)=>exec('docker',args,{timeout,maxBuffer:1024*1024});
const image=process.env.WORLD_FORGE_TEST_IMAGE;
if(!image||!/^[-a-z0-9._/:]+@sha256:[a-f0-9]{64}$/.test(image)){
  console.error('Set WORLD_FORGE_TEST_IMAGE to a locally available image pinned by @sha256:<64 lowercase hex>.');
  process.exit(2);
}
try{await run(['info','--format','{{.ServerVersion}}']);await run(['image','inspect',image]);}
catch{console.error('Docker daemon or pinned local image unavailable; no container was created.');process.exit(2);}
const jobId='JOB-'+randomUUID();const leaseToken=randomUUID();const name='world-forge-'+randomUUID();
const labels=ownershipLabels({jobId,leaseToken});
let created=false;let verifiedId;
try{
  const args=['create','--name',name,'--network','none','--read-only','--cap-drop','ALL','--security-opt','no-new-privileges','--pids-limit','32','--memory','128m','--cpus','0.5',
    ...Object.entries(labels).flatMap(([key,value])=>['--label',`${key}=${value}`]),image,'node','-e','setTimeout(()=>{},60000)'];
  const {stdout}=await run(args);created=true;
  const id=stdout.trim();if(!/^[a-f0-9]{64}$/.test(id))throw Error('Docker did not return a full container ID');
  const before=await verifyContainerOwnership(name,{jobId,leaseToken});
  if(!before.verified||before.containerId!==id||before.running)throw Error('Created container ownership verification failed');
  verifiedId=id;
  const wrong=await verifyContainerOwnership(name,{jobId,leaseToken:randomUUID()});
  if(wrong.verified||wrong.reason!=='OWNERSHIP_MISMATCH')throw Error('Mismatched lease accepted');
  await run(['start',id]);
  const running=await verifyContainerOwnership(name,{jobId,leaseToken});
  if(!running.verified||!running.running||running.containerId!==id)throw Error('Running state not confirmed');
  const stopped=await stopOwnedContainer(name,{jobId,leaseToken});
  if(!stopped.confirmed||stopped.containerId!==id)throw Error('Verified termination failed: '+stopped.reason);
  created=false;
  console.log(JSON.stringify({passed:true,jobId,containerId:id,checks:['created','ownership','mismatch_rejected','running','verified_removed']},null,2));
}catch(error){console.error('LIVE DOCKER ACCEPTANCE FAILED:',error.message);process.exitCode=1;}
finally{
  if(created){
    // Only remove the exact container ID if ownership still verifies.
    try{const current=await verifyContainerOwnership(name,{jobId,leaseToken});if(current.verified&&current.containerId===verifiedId)await run(['rm','--force',current.containerId]);
    else console.error('Container requires manual inspection:',name);}catch{console.error('Container may require manual cleanup:',name);}
  }
}
