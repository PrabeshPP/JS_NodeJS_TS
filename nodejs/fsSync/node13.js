const fs=require("fs");

const name1="bista";
console.log(name1);
// fs.appendFileSync('read.txt','welcome to the metaverse');
// fs.appendFileSync('read.txt','\nBlockChian is the future');
const buff_data=fs.readFileSync('read.txt');

let org_data=buff_data.toString();
console.log(org_data);

//to rename the file
fs.renameSync('read.txt','prabesh.text');