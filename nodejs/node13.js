const fs=require("fs");

const name1="bista";
console.log(name1);
fs.writeFileSync('read.txt','welcome to the metaverse');
fs.appendFileSync('read.txt','\nBlockChian is the future');
