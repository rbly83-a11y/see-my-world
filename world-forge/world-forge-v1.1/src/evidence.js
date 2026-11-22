import { createHash, timingSafeEqual } from 'node:crypto';
const sha256 = s => createHash('sha256').update(s).digest('hex');
const shaPattern = /^[a-f0-9]{40}$/i;
export function validateGitHubEvidence(e, task) {
  if (!e || e.source !== 'github' || !e.repository || !/^[\w.-]+\/[\w.-]+$/.test(e.repository)) throw Error('Invalid repository evidence');
  if (!shaPattern.test(e.headSha || '') || !shaPattern.test(e.testedSha || '') || e.headSha.toLowerCase() !== e.testedSha.toLowerCase()) throw Error('Revision mismatch');
  if (!Number.isSafeInteger(e.pullRequest) || e.pullRequest < 1) throw Error('Invalid pull request');
  if (!Array.isArray(e.checks) || !e.checks.length || !e.checks.every(c => c.conclusion === 'success' && c.headSha?.toLowerCase() === e.headSha.toLowerCase())) throw Error('CI checks incomplete');
  if (task && e.taskId !== task.id) throw Error('Task mismatch');
  return { taskId:e.taskId, repository:e.repository, pullRequest:e.pullRequest, commitSha:e.headSha.toLowerCase(), checks:e.checks.map(c=>c.name), digest:sha256(JSON.stringify(e)), provenance:'UNVERIFIED_FIXTURE' };
}
// This parser validates structure only. It cannot prove GitHub issued the evidence.
export function evidenceFromFixture(raw, task) { return validateGitHubEvidence(JSON.parse(raw), task); }
export function constantTimeTokenMatch(provided, expected) {
  if (typeof provided !== 'string' || typeof expected !== 'string' || !expected) return false;
  const a=Buffer.from(sha256(provided),'hex'), b=Buffer.from(sha256(expected),'hex');
  return timingSafeEqual(a,b);
}
