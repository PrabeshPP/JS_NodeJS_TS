const express=require("express");
const app=express();

const port=3000;
 
app.get('/',(req,res)=>{
    res.send("Hello,My name is Prabesh Bista!");

});


app.listen(port,()=>{
    console.log(`App listening on Port ${port}`)
})