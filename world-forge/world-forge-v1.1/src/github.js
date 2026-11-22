import { validateGitHubEvidence } from './evidence.js';
const REPO=/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const SHA=/^[0-9a-f]{40}$/i;
const safeName=s=>typeof s==='string'&&s.length>0&&s.length<=100;
export async function fetchPullRequestEvidence({repository,pullRequest,taskId,token,fetchImpl=fetch,requiredChecks=[]}) {
  if(!REPO.test(repository||'')||!Number.isSafeInteger(pullRequest)||pullRequest<1||!safeName(taskId)||!Array.isArray(requiredChecks)||!requiredChecks.every(safeName))throw Error('Invalid request');
  if(typeof token!=='string'||token.length<1)throw Error('GitHub credential required');
  const [owner,repo]=repository.split('/');
  const root=`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
  const headers={Accept:'application/vnd.github+json',Authorization:`Bearer ${token}`,'X-GitHub-Api-Version':'2022-11-28','User-Agent':'world-forge-readonly'};
  const get=async url=>{
    const response=await fetchImpl(url,{method:'GET',headers,redirect:'error',signal:AbortSignal.timeout(12000)});
    if(!response.ok)throw Error(`GitHub request failed (${response.status})`);
    return response.json();
  };
  const pr=await get(`${root}/pulls/${pullRequest}`);
  if(pr.state!=='open'||!SHA.test(pr.head?.sha||'')||pr.head.repo?.full_name!==repository||pr.base.repo?.full_name!==repository)throw Error('PR not eligible or external fork');
  const sha=pr.head.sha.toLowerCase();
  const checks=await get(`${root}/commits/${sha}/check-runs?per_page=100`);
  if(!Array.isArray(checks.check_runs)||checks.total_count>100)throw Error('Incomplete check run listing');
  const byName=new Map();
  for(const c of checks.check_runs){
    if(c.head_sha?.toLowerCase()!==sha)continue;
    const prior=byName.get(c.name);
    if(!prior||String(c.completed_at||'')>String(prior.completed_at||''))byName.set(c.name,c);
  }
  if(!requiredChecks.length)throw Error('Required checks must be configured');
  const selected=requiredChecks.map(name=>{
    const c=byName.get(name);
    if(!c||c.status!=='completed'||c.conclusion!=='success')throw Error(`Required check not successful: ${name}`);
    return {name,conclusion:'success',headSha:sha};
  });
  const evidence=validateGitHubEvidence({source:'github',repository,pullRequest,taskId,headSha:sha,testedSha:sha,checks:selected},{id:taskId});
  return {...evidence,provenance:'GITHUB_API_READ_ONLY',retrievedAt:new Date().toISOString(),requiredChecks};
}
