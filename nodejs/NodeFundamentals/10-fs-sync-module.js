const fs=require('fs');
const path=require('path');

const filePath=path.join('Dymmy','dymmy1.1','dummy.txt');

//Reading the file  in Synchronous method
const data=fs.readFileSync(filePath,'utf-8')
console.log(data);

//Writing the file in Synchronous method

fs.writeFileSync(filePath,"I have re-written the file.");


//Appending the data in a file in a Synchronous method.
fs.appendFileSync(filePath,"I have added some txt without deleting the previous data.")


//!Another way of appending the data from writeFileSync

fs.writeFileSync(filePath,"I have re-written the file.",{flag:"a"});
