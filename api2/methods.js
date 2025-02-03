 const http = require('http');
 const fs=require('fs');
 const url=require("url");
 
 const server = http.createServer((req,res)=>{
   
   if (req.url=="/favicon.ico") return res.end();
   const log=`${req.url} ${req.method} New Request Recieved\n`;
   const myurl=url.parse(req.url , true);
   console.log(myurl);
   
   fs.appendFile("log.txt" , log , (err,data)=>{
     
 
     switch (myurl.pathname) {
       case '/': 
         res.end("HomePage");  
         break;
       case '/signup':
        if (req.method=='GET'){ 
          res.end("this is a signup form");
        } else if(req.method==POST){
          res.end('success');
        }
         break;
     }
   })
   
 });
 
 server.listen(4005 , ()=> {
   console.log(`methods`);
   
 });
 