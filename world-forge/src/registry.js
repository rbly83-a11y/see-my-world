import { readFileSync } from 'node:fs';
const path=new URL('../config/agent-manifest.json',import.meta.url);
export function agentRegistry(){
  const data=JSON.parse(readFileSync(path,'utf8'));
  const ids=new Set();
  for(const agent of data.agents){
    if(!/^[A-Z]{3,20}$/.test(agent.id)||ids.has(agent.id)||agent.canMerge!==false||agent.canDeploy!==false)throw Error('Invalid agent registry');
    ids.add(agent.id);
  }
  if(ids.size!==24)throw Error('Expected 24 specialists');
  return data;
}
