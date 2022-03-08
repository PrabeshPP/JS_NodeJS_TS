const fs=require('fs');
const path=require('path');
const util=require('util');

const filePath=path.join('Dymmy','dymmy1.1','dummy.txt');

//using the util method to extract the data
const readFilePromisify=util.promisify(fs.readFile);

//! using promise

// const textData=(path)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf-8',(err,result)=>{
//             if(err){
//                 reject(err);
//             }else{
//                resolve(result);
//             }
//         })

//     })
// }

// textData(filePath)
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err));

//using async-await 

const start=async()=>{
    try{
        const first=await readFilePromisify(filePath,'utf-8');
        console.log(first);
    }catch(err){
        console.log("Hey!provide the correct path.");
    }
    
}

start();

