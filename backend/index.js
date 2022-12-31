const express= require('express')
const mongoose = require('mongoose')
const ProjectRouter = require('./routes/projects')
var cors = require('cors')


require('dotenv').config()
//express app
const app=express()
app.use(cors()) // Use this after the variable declaration
//
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//route
app.use('/projects',ProjectRouter)
//connetc to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to the database  & listenenig on port',process.env.PORT)
})

})
.catch((error)=>{
    console.log(error)
})
