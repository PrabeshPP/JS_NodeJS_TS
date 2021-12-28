const fs=require('fs');

// creating and writing in an async file
fs.writeFile('read.text','this is an async file!',(err)=>{
console.log("files is created");
});

// //appending the data in an async file
fs.appendFile('read.text',"\nThis is a second line",(err)=>
{
    console.log("file appended!");
});



// reading the data from an async file
fs.readFile('read.text','utf-8',(err,data)=>{
    console.log(data);
});
console.log("Hellow world")

//renaming the file name
fs.rename('read.text','rename.text',(err)=>{
    console.log("reanmed");
});

