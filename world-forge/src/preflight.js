import { agentRegistry } from './registry.js';
import { validateAgentAssignment } from './agent-policy.js';
import { readyTasks } from './factory.js';

const SEGMENT=/^[a-zA-Z0-9_.-]+$/;
export function prepareExecutionPlan(tasks, assignment) {
  const a=validateAgentAssignment(assignment);
  const agent=agentRegistry().agents.find(x=>x.id===a.agentId);
  if(!agent)throw Error('Unknown specialist');
  const task=tasks.find(t=>t.id===a.taskId);
  if(!task)throw Error('Unknown task');
  if(task.owner!==a.agentId)throw Error('Specialist not assigned to task');
  if(!readyTasks(tasks).some(t=>t.id===task.id))throw Error('Task not ready or dependencies unaccepted');
  if(a.writablePaths.some(p=>p.split('/').some(segment=>!SEGMENT.test(segment)||segment==='.'||segment==='..')))throw Error('Unsafe writable path segment');
  if(a.writablePaths.some(p=>p==='.git'||p.startsWith('.git/')||p==='node_modules'||p.startsWith('node_modules/')))throw Error('Protected writable path');
  if(a.writablePaths.some(p=>p.startsWith('.github/workflows/')))throw Error('CI workflow modification requires separate approval');
  return Object.freeze({taskId:task.id,agentId:agent.id,writablePaths:[...a.writablePaths],maxAttempts:a.maxAttempts,
    productionAccess:false,secretAccess:false,networkAccess:false,executionAuthorized:false,
    mode:'PREFLIGHT_ONLY',warning:'This plan does not start a process or enforce an operating-system sandbox.'});
}
