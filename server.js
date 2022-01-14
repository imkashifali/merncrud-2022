const express = require('express')
const app = express();
const DBFile = require('./connection')
const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
const postRoute = require('./routes/post')

app.use('/api/post',postRoute)

app.get('/',(req,res)=>{
    res.end('hy')
})

app.listen(5000,function(){
    console.log('Node js server Running Successfully ')
})