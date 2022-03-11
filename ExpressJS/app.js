var express=require('express');
const app=express();
app.get("/",(req,res)=>{
  res.end("You are in the home Page!")
})

app.get("/about",(req,res)=>{
  res.end("You are in the about Page.")
})

app.listen(3000,()=>{
  console.log("listening at port 3000");
})