const { response } = require("express");

const express=require("express"); 

const app =express(); 

const Data1 = (req,resp,next) =>{
    console.log('print data1');
    next();
}
const Data2 = (req,resp,next) =>{
    console.log('print data2');
    next();                                   
}

app.use(Data1)  

app.get("/",Data1,(req,resp)=>{
    response.send("welcome to home page")
})

app.get("/login",Data2,(req,resp)=>{    
    response.send('Welcome to login page')
})

app.listen(4000);