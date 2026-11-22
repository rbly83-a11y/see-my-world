// Fail-closed execution coordinator. No automatic agent dispatch or deployment.
import { readdir, realpath, stat } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join, relative, sep } from 'node:path';
import { attestSourceRevision, snapshotArtifacts, inventoryArtifacts } from './jobs.js';
import { runIsolated } from './runner.js';

const inside=(base,p)=>{const r=relative(base,p);return r!==''&&r!=='..'&&!r.startsWith('..'+sep)&&!r.startsWith(sep);};

/** Verify checkout and blank output before marking job RUNNING; snapshot after execution.
 *  Caller must use an exclusive workspace and output directory per job.
 *  The returned snapshot is local, not immutable remote storage.
 */
export async function executeVerifiedJob(ledger,id,config,{attest=attestSourceRevision,runner=runIsolated,snapshot=snapshotArtifacts,fence=null}={}) {
  if(config?.execute!==true)throw Error('Explicit execution opt-in required');
  const job=ledger.get(id);
  if(!job||job.status!=='QUEUED')throw Error('Job must be queued');
  if(!config.workspace||!config.output||!config.snapshotParent)throw Error('Workspace, output and snapshot parent required');
  const [workspace,output,parent]=await Promise.all([realpath(config.workspace),realpath(config.output),realpath(config.snapshotParent)]);
  if(workspace===output||workspace===parent||output===parent||inside(workspace,output)||inside(output,workspace)||inside(workspace,parent)||inside(parent,workspace)||inside(output,parent)||inside(parent,output))throw Error('Workspace, output and snapshot parent must be disjoint');
  for(const p of [workspace,output,parent])if(!(await stat(p)).isDirectory())throw Error('Execution path is not a directory');
  if((await readdir(output)).length)throw Error('Output must be empty before execution');
  const attestation=await attest(workspace,job.sourceSha);
  if(attestation?.sha!==job.sourceSha||attestation.clean!==true||attestation.root!==workspace)throw Error('Source attestation failed');
  // Do not trust a pre-existing destination. A unique snapshot path is created after execution.
  let snapshotResult=null;
  const wrappedRunner=async(plan,runConfig)=>{
    const result=await runner(plan,runConfig);
    if(fence)fence();
    if(result.success===true){
      const snapshotDir=join(parent,'wf-artifacts-'+randomUUID());
      snapshotResult=await snapshot(output,snapshotDir);
      if(fence)fence();
      const manifest=await inventoryArtifacts(snapshotResult.directory);
      if(manifest.manifestSha256!==snapshotResult.manifest.manifestSha256)throw Error('Snapshot verification failed');
    }
    if(fence)fence();
    return result;
  };
  const finished=await ledger.execute(id,{...config,workspace,output},{runner:wrappedRunner,inventory:async dir=>snapshotResult?snapshotResult.manifest:inventoryArtifacts(dir),fence});
  return {job:finished,sourceAttestation:attestation,snapshot:finished.status==='COMPLETED'?snapshotResult:null};
}
