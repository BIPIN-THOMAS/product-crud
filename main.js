require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');

const app=express();
const PORT=process.env.PORT || 8000

const authRouter=require('./src/routes/router')//to require the router

//database connection

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("database connected")
})
.catch((error)=>{
    console.error("Error connected",error)
})
 
// middlewares

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
    secret:"my secret key",
    saveUninitialized:true,
    resave:false,
})
);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use('/api',authRouter)//to 

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
});
