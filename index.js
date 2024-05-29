const express = require('express')
const mongoose = require('mongoose')

const index = express()
const url = 'mongodb://localhost/student'
index.use(express.json())
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

const alianroute = require('./routes/student.js')
index.use('/student',alianroute)

con.on('open',function()
{
    console.log("connected...")
})

index.listen(3000,function(){
    console.log("Server started")
})