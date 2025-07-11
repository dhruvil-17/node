const fs = require('fs');

// function sum(a,b) {
//  var add= a+b;
//  var result=add.toString();
//  console.log(result);
// }

// fs.writeFile('./output.txt', sum(3,5), (err)=>{
//   if (err) {
//     console.log(err);
//   } else{
//     console.log("Data written successfully")
//   }
// });
let a=10;
let b=15;

let sum=a+b;
let sub=a-b;

let data= `sum : ${sum}\n diff : ${sub}`;
console.log(data);
fs.writeFile('./output.txt', data , (err)=>{
  if (err) {
    console.log(err);
  } else{
    console.log('file written successfully');
  }
});