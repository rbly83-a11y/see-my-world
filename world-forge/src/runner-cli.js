import { prepareContainerRun,executeContainerRun } from './runner.js';
const [workspace,image,taskId,mode]=process.argv.slice(2);
if(!workspace||!image||!taskId){
  console.error('Usage: node src/runner-cli.js ABS_WORKSPACE IMAGE@sha256:DIGEST TASK_ID [--execute]');
  process.exitCode=2;
}else{
  try{
    const plan=await prepareContainerRun({workspace,image,taskId,command:['npm','test']});
    if(mode==='--execute'){
      const result=await executeContainerRun(plan,{explicitConsent:true});
      console.log(JSON.stringify(result,null,2));
      if(!result.passed)process.exitCode=1;
    }else if(mode===undefined){console.log(JSON.stringify(plan,null,2));}
    else throw Error('Unknown option');
  }catch(e){console.error(e.message);process.exitCode=1;}
}
