//Synchronous modules
const {readFileSync,writeFileSync, read}=require('fs')//destructuring methods of fs
//or
// const fs=require('fs')
// fs.readFileSync
// fs.writeFileSync
console.log('start')
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
console.log(first,second)

writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag:'a'}//third arg is a flag which will append data instead of replacing 
)//writes into a file by replacing prevois content or a new file is created if it does not exist
console.log('Done with this task');
console.log('starting the next one');







