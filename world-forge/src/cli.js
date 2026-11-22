import { readFileSync } from 'node:fs';
import { Store } from './store.js';
const [cmd,dbPath,arg]=process.argv.slice(2);
if(!cmd||!dbPath){console.error('Usage: node src/cli.js init|status|verify|transition DB [task|next|actor]');process.exit(2);}
const db=new Store(dbPath);
try{
  if(cmd==='init')db.initialize(JSON.parse(readFileSync(arg,'utf8')));
  else if(cmd==='status')console.log(JSON.stringify(db.tasks(),null,2));
  else if(cmd==='verify')console.log(`Verified ${db.verify()} audit records`);
  else if(cmd==='transition'){const [id,next,actor]=process.argv.slice(4);console.log(db.change(id,next,actor));}
  else throw Error('Unknown command');
}catch(e){console.error(e.message);process.exitCode=1;}finally{db.close();}
