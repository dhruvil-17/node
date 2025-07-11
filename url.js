const http = require('http');
const fs=require('fs');
const url=require("url");

const server = http.createServer((req,res)=>{
  
  if (req.url=="/favicon.ico") return res.end();
  const log=`${req.url} New Request Recieved\n`;
  const myurl=url.parse(req.url , true);
  console.log(myurl);
  
  fs.appendFile("log.txt" , log , (err,data)=>{
    

    switch (myurl.pathname) {
      case '/': 
        res.end("HomePage");  
        break;
      case '/about':
        const username=myurl.query.myname;
        res.end(`Hi ${username}`);
        break;
      case '/search':
        const search=myurl.query.search_query;
        res.end(`Here are your results for ${search}`);
        break;
      default:res.end("Error hai chatGPT kar le");
        break;
    }
  })
  
});

server.listen(3005 , ()=> {
  console.log(`lilu`);
  
});
