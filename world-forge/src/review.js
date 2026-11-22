// Read-only GitHub review assessment. Advisory only: not an authenticated approval gate.
const SHA=/^[a-f0-9]{40}$/i;
export function assessReviewEvidence({pr, reviews, requiredApprovals=1, authorLogin, headSha}) {
  if (!SHA.test(headSha||'') || !Array.isArray(reviews) || !Number.isSafeInteger(requiredApprovals) || requiredApprovals<1) throw Error('Invalid review assessment');
  if (pr?.head?.sha?.toLowerCase()!==headSha.toLowerCase() || pr?.state!=='open') throw Error('PR revision/state mismatch');
  const latest=new Map();
  for(const r of reviews){
    if(!r?.user?.login || !['APPROVED','CHANGES_REQUESTED','DISMISSED','COMMENTED'].includes(r.state))continue;
    if(r.commit_id?.toLowerCase()!==headSha.toLowerCase())continue;
    if(r.user.login.toLowerCase()===String(authorLogin||pr.user?.login||'').toLowerCase())continue;
    const prev=latest.get(r.user.login.toLowerCase());
    if(!prev || String(r.submitted_at||'')>=String(prev.submitted_at||''))latest.set(r.user.login.toLowerCase(),r);
  }
  const approved=[...latest.values()].filter(r=>r.state==='APPROVED');
  const changesRequested=[...latest.values()].filter(r=>r.state==='CHANGES_REQUESTED');
  return {headSha:headSha.toLowerCase(),approvalCount:approved.length,requiredApprovals,changesRequested:changesRequested.length,reviewers:approved.map(r=>r.user.login),advisoryPass:approved.length>=requiredApprovals && changesRequested.length===0,provenance:'UNVERIFIED_INPUT'};
}
export async function fetchReviewAssessment({repository,pullRequest,token,headSha,requiredApprovals=1,fetchImpl=fetch}){
  if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository||'')||!Number.isSafeInteger(pullRequest)||pullRequest<1||!token||!SHA.test(headSha||''))throw Error('Invalid GitHub review request');
  const root=`https://api.github.com/repos/${repository}`;
  const headers={Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'world-forge-readonly'};
  async function get(path){const r=await fetchImpl(`${root}${path}`,{method:'GET',headers,redirect:'error',signal:AbortSignal.timeout(12000)});if(!r.ok)throw Error(`GitHub HTTP ${r.status}`);return r.json();}
  const pr=await get(`/pulls/${pullRequest}`);
  const reviews=await get(`/pulls/${pullRequest}/reviews?per_page=100`);
  if(!Array.isArray(reviews)||reviews.length===100)throw Error('Review pagination incomplete');
  return {...assessReviewEvidence({pr,reviews,requiredApprovals,headSha}),provenance:'GITHUB_API_READ_ONLY'};
}
