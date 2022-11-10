const express = require("express");
const app=express()
const mongoose=require('mongoose')
const apiRouter=require('./routers/api')
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/userApiData',()=>{
    console.log('connect to DB userApiData');
})

app.use('/api/user',apiRouter);
app.listen(5000,()=>{
    console.log('port running on 5000')
})