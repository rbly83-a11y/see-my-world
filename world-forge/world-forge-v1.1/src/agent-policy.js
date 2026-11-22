export function validateAgentAssignment(assignment) {
  if (!assignment || !assignment.taskId || !assignment.agentId) throw Error('Missing assignment identity');
  if (!Array.isArray(assignment.writablePaths) || assignment.writablePaths.length===0) throw Error('Writable scope required');
  if (assignment.writablePaths.some(p=>typeof p!=='string'||p.startsWith('/')||p.includes('..')||p.includes('\\')||p==='.'||p==='')) throw Error('Unsafe writable path');
  if (assignment.productionAccess!==false || assignment.secretAccess!==false || assignment.networkAccess!==false) throw Error('Unsafe agent permissions');
  if (!Number.isSafeInteger(assignment.maxAttempts) || assignment.maxAttempts<1 || assignment.maxAttempts>5) throw Error('Invalid attempt limit');
  return Object.freeze({...assignment});
}
// Policy validation only. This does NOT launch or sandbox agents.
