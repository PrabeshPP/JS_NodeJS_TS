const fs=require('fs');
fs.writeFileSync('op.txt','My name is prabesh bista,Have a good time!') // this line will write the file and if call again it will override the file
fs.appendFileSync("op.txt","\nThis is second line.") //this line will add the data to an existing file
readline=fs.readFileSync('op.txt','utf8'); //this line will read the file and will return the data of the file
console.log(readline);
