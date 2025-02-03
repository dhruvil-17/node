const express=require("express");
const app=express();
const ApiRoute=require('./routes/user');
const staticRoute=require('./routes/staticRoute');
const data=require('./MOCK_DATA.json');
const {connectDB}=require("./connect");
const PORT=8004;

connectDB("mongodb://127.0.0.1:27017/api");
app.use(express.urlencoded({extended:false}));
app.use('/api',ApiRoute)
app.use('/',staticRoute)

app.listen(PORT , () => {
  console.log(`server running at port ${PORT}`);
  
})