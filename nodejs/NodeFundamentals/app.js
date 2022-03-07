//http-module
const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("Welcome to our homePage")
    res.end()
})

server.listen(50001);