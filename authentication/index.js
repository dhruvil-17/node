const express= require("express");
const {connectDB}=require('./connect');
const path=require('path');
const app=express();  


const PORT=8002;
connectDB("mongodb://127.0.0.1:27017/ToDoList")
.then(()=> console.log('MongoDB connected')
);
const userRoute=require('./routes/list');
const staticRoute=require('./routes/staticRoute');

app.set('view engine','ejs');
app.set('views',path.resolve("./views"))

app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(express.json()); // Parses JSON request body

app.use('/user',userRoute )
app.use('/',staticRoute)


app.listen(PORT , ()=>{
  console.log("MongoDB connected");
  
})