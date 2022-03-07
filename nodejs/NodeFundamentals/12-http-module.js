//http-module
const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
       res.end("I am in homePage");
   }
   
   if(req.url==='/about'){
       res.end("I am a programmer");
   }

       res.end("You are in nowhere!");
   
})

server.listen(5000);