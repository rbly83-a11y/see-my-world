import { createHash } from 'node:crypto';

export const STATES = Object.freeze(['DRAFT','AWAITING_APPROVAL','READY','RUNNING','REVIEW','BLOCKED','ACCEPTED','REJECTED']);
const transitions = {
  DRAFT:['AWAITING_APPROVAL','READY','BLOCKED'],
  AWAITING_APPROVAL:['READY','BLOCKED','REJECTED'],
  READY:['RUNNING','BLOCKED'], RUNNING:['REVIEW','BLOCKED'],
  REVIEW:['ACCEPTED','REJECTED','BLOCKED'],
  BLOCKED:['READY','REJECTED'], REJECTED:['DRAFT'], ACCEPTED:[]
};
export function validateTasks(tasks) {
  if (!Array.isArray(tasks)) throw Error('Tasks must be an array');
  const ids = new Set();
  for (const t of tasks) {
    if (!t.id || !t.owner || !t.title || !Array.isArray(t.dependencies) || !STATES.includes(t.status)) throw Error(`Invalid task: ${t.id ?? '?'}`);
    if (ids.has(t.id)) throw Error(`Duplicate task: ${t.id}`);
    ids.add(t.id);
  }
  for (const t of tasks) for (const dep of t.dependencies) {
    if (!ids.has(dep)) throw Error(`Unknown dependency ${dep}`);
    if (dep === t.id) throw Error(`Self-dependency ${dep}`);
  }
  const byId = new Map(tasks.map(t => [t.id,t]));
  const visited = new Set(), visiting = new Set();
  function visit(id) {
    if (visiting.has(id)) throw Error(`Dependency cycle at ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const d of byId.get(id).dependencies) visit(d);
    visiting.delete(id); visited.add(id);
  }
  for (const t of tasks) visit(t.id);
  return true;
}
export function readyTasks(tasks) {
  validateTasks(tasks);
  const byId = new Map(tasks.map(t=>[t.id,t]));
  return tasks.filter(t=>t.status==='READY' && t.dependencies.every(d=>byId.get(d).status==='ACCEPTED'));
}
export function transition(task, next, actor, evidence = {}) {
  if (!transitions[task.status]?.includes(next)) throw Error(`Forbidden transition ${task.status} -> ${next}`);
  if (next==='ACCEPTED' && !mayAccept(task, evidence)) throw Error('Acceptance evidence or approval missing');
  return {...task,status:next,updatedBy:actor};
}
export function mayAccept(task, e) {
  if (!e || e.taskId!==task.id || !e.commitSha || !e.testedCommitSha || e.commitSha!==e.testedCommitSha) return false;
  if (e.testsPassed!==true || e.independentReviewPassed!==true || e.reviewerId===task.owner) return false;
  if ((task.risk==='HIGH'||task.risk==='CRITICAL'||task.privacyBoundary===true) && e.securityReviewPassed!==true) return false;
  if (task.accessibilityImpact===true && e.accessibilityReviewPassed!==true) return false;
  if ((task.canonChange===true||task.founderApprovalRequired===true) && e.founderApprovalVerified!==true) return false;
  return true;
}
export function releaseAllowed(release) {
  return Boolean(release?.founderApprovalVerified && release?.securitySignoffVerified && release?.rollbackVerified && release?.stagingVerified && release?.commitSha && release?.approvedCommitSha===release?.commitSha && release?.blockingFindings===0);
}
export function digest(obj) {return createHash('sha256').update(JSON.stringify(obj)).digest('hex');}
export function redact(text) {return String(text).replace(/(api[_-]?key|password|token|secret)\s*[:=]\s*\S+/gi,'[REDACTED]');}
