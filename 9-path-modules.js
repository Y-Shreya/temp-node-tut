const path=require('path')
console.log(path.sep)//Path sepeerator
const filePath=path.join('/content','subfolder','textcontent.txt')//joins the path
console.log(filePath)
const base=path.basename(filePath)//normalized path
console.log(base)

const absolute=path.resolve(__dirname,'content','subfolder','textcontent.txt')//absolute path useful when working on different environment
console.log(absolute)