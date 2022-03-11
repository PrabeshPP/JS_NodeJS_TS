var express=require('express');
const app=express();
app.get("/",(req,res)=>{
  res.end("You are in the home Page!")
})
