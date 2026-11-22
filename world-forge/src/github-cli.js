import { fetchPullRequestEvidence } from './github.js';
const [repository,pr,taskId,...checks]=process.argv.slice(2);
if(!repository||!pr||!taskId||checks.length===0){console.error('Usage: GITHUB_TOKEN=... node src/github-cli.js OWNER/REPO PR_NUMBER TASK_ID REQUIRED_CHECK [REQUIRED_CHECK...]');process.exit(2);}
try {
  const result=await fetchPullRequestEvidence({repository,pullRequest:Number(pr),taskId,token:process.env.GITHUB_TOKEN,requiredChecks:checks});
  // Output contains only normalized read-only evidence; never print credentials.
  console.log(JSON.stringify(result,null,2));
}catch(e){console.error(`Evidence retrieval failed: ${e.message}`);process.exitCode=1;}
