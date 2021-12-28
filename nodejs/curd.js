const fs=require('fs');

fs.writeFileSync('op.txt','My name is prabesh bista,Have a good time!')
readline=fs.readFileSync('op.txt').toString();
console.log(readline);