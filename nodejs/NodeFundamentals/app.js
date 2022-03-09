const fs=require('fs');
const path=require('path');

const filePath=path.resolve(__dirname,'Dymmy','dymmy1.1','big.txt');
for(let i=0;i<1000;i++){
    fs.writeFileSync(filePath,`Hello ${i}\n`,{flag:'a'})
}