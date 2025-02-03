 const http = require('http');
 const express=require("express");
 
const app=express();

app.get('/', (req,res)=>{
  return res.send("hello from home page");
});
app.get('/about', (req,res)=>{
  return res.send(`hello from about page to ${req.query.name} \n age : ${req.query.age} aka Badmosh`);
  //req.query.queryname
});
app.get('/post', (req,res)=>{
  return res.send("hello from post page");
});
 
app.listen(8000, ()=> console.log('Dhruvil ON'));