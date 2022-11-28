const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require("body-parser");
const app=express()


app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({
    extended: true
}));
//Make uploads folder public
app.use('/uploads',express.static(`${__dirname}/uploads`));

mongoose.connect("mongodb://localhost:27017/ClientDB",{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database is connected ")
})

const controller=require('./controllers/clientContoller')
app.use('/api',controller)

app.listen(3000,()=>{
    console.log("Server running on Port 3000")
})



