const fs= require("fs");

// sync
// fs.writeFileSync('./test.txt', "hello");

//sync
// fs.writeFile('./test.txt', "hello more",(err)=>{});

// const result=fs.readFile("./contact.txt","utf-8" , (err , result)=>{
//   console.log(result);
// });

fs.appendFileSync("./contact.txt","hallo");