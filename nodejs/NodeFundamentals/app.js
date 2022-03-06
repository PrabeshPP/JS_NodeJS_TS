const fs=require('fs');
const path=require('path');

//
const file_path=path.resolve(__dirname,'Dymmy','dymmy1.1','dummy.txt');

const data=fs.readFile(file_path,'utf-8',(err,result)=>{
    if(err){
        return "There is no such file";
    }else{
        console.log(result);
        return;
    }
},)

// console.log(data);
