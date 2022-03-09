const fs=require('fs');
const path=require('path');

filePath=path.join('Dymmy','dymmy1.1','big.txt');

const stream=fs.createReadStream(filePath,'utf-8');

stream.on('data',(result)=>{
    console.log(result);
})

