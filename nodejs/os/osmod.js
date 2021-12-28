//exploring with operating system command
const os=require('os');
console.log(os.arch());

const freeMemory=os.freemem();
const inGIBI=freeMemory/1024/1024/1024;
console.log(inGIBI);
console.log(os.networkInterfaces());
// console.log(os.totalmem()/1024/1024/1024);
console.log(os.hostname());
console.log(os.type());
