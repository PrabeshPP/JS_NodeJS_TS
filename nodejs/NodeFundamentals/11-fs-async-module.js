const fs=require('fs');
const path=require('path');

//
const file_path=path.resolve(__dirname,'Dymmy','dymmy1.1','dummy.txt');

fs.readFile(file_path,'utf-8',(err,result)=>{
    if(err){
        return "There is no such file";
    }else{
        console.log(result);
        return;
    }
},)

fs.writeFile(file_path,'\nMy name is Prabesh Bista.',{flag:'a'},(err,result)=>{
    if(err){
        console.log("There is an error in writing to the file!");
        return ;
    }
   
})


