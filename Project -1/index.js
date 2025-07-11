const express=require("express");
const data=require("./data.json");
const fs=require("fs");
const app=express();
const PORT=8000;

//middleware
app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=>{
  console.log("hello from middleware 1");
  req.myname="Dhruvil";//this myname will also be accessible by middleware 2 because of next function

  //return res.json({mgs:"hello from middleware 1"}); we ended the task here and send response from here , the execution did not went further to the routes

  next(); //to send execution to the further code
  
});
app.use((req,res,next)=>{
  console.log("hello from middleware 2" , req.myname);
  //return res.end("Hey");
  next();
});
app.use((req,res,next)=>{
  fs.appendFile("log.txt", `\n${Date.now()}: ${req.method} : ${req.path}`,(err,data)=>{
    next();
  });
});



//routes

app.get('/', (req, res) => {
return 	res.send("<h1>Home Page</h1>")
});


app.get('/users' , (req,res)=>{
  const  html = `
  <ul>
    ${data.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>
  `;//data.map to iterate over json data and .join to join them in a particular way and the user variable can be of any name like users theuser etc
  res.send(html);
})

//rest API
app.get('/api/users' , (req,res)=>{
  //console.log(`my name is ${req.myname} from route`);
  res.setHeader("X-myName","dhruvil")//custom heading
  console.log(req.headers);
  
  return res.json(data);  //req.json because we are dealing with json data
  
  
})

//groupped route
app.route('/api/users/:id').get((req,res)=>{ 
  const id=Number(req.params.id);//id for dynamic path parameter
  const name=data.find((name)=>name.id===id);//name variable can be anything
  return res.json(name);
})
.patch((req, res)=>{
  //edit user with id
  return req.json({status : "pending"});
  // const body=req.body;
  // data.patch({...body, id});
  // fs.writeFile('./data.json', JSON.stringify(data), (err, result)=>{
  //   return res.json({ststus:"success" , id : data.length});
  // })
  
})
.delete((req,res)=>{
  //delete user with id
  const body=req.body;
  data.pop({...body, id:data.length});
  fs.writeFile('./data.json', JSON.stringify(data), (err, result)=>{
    return res.json({ststus:"success" , id : data.length});
    
  });
});
//we have done grouping of a route so if we want to change the name of this route in fututre then we have to change only at one place



app.post('/api/users', (req,res)=>{
  // to create new user
  const body=req.body;
  data.push({...body, id:data.length+1});
  fs.writeFile('./data.json', JSON.stringify(data), (err, result)=>{
    return res.json({ststus:"success" , id : data.length});
    
  });
  
});



app.listen(PORT , ()=> console.log(`server started at port 6000`));