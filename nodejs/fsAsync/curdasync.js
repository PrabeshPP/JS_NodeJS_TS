const fs=require('fs');

fs.writeFile('read.text','this is an async file!',(err)=>{
console.log("files is created")
});
