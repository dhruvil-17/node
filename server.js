const http = require('http');
const fs=require('fs');
const url=require("url");

const server = http.createServer((req,res)=>{
  
  if (req.url=="/favicon.ico") return res.end();
  const log=`${req.url} New Request Recieved\n`;
  const myurl=url.parse(req.url);
  console.log(myurl);
  
  fs.appendFile("log.txt" , log , (err,data)=>{
    

    switch (myurl.pathname) {
      case '/': res.end("HomePage");
        
        break;
      case '/about':res.end("About Page");
      break;
      default:res.end("Error hai chatGPT kar le");
        break;
    }
  })
  
});

server.listen(3000 , ()=> {
  console.log(`lilu`);
  
});
