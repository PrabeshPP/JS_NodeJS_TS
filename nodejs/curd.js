const fs=require('fs');

// fs.writeFileSync('op.txt','My name is prabesh bista,Have a good time!')
fs.appendFileSync("op.txt","\nThis is second line.")
readline=fs.readFileSync('op.txt').toString();
console.log(readline);