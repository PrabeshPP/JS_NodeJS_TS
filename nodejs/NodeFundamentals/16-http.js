const http=require('http');
const fs=require('fs');
const path=require('path');

filePath=path.join('Dymmy','dymmy1.1','big.txt');

http.createServer(function(req,res){
    // const text=fs.readFileSync(filePath,'utf-8');
    // res.end(text);

    //using the fs.createReadStream()
    
    const fileStream=fs.createReadStream(filePath,'utf-8');

    fileStream.on('open',()=>{
        fileStream.pipe(res)

    });

    fileStream.on('error',()=>{
        res.end("404 error!")

    })


}).listen(5000);