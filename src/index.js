const express = require('express')
const serverconfig = require('./config/serverconfig.js')
const connectDB = require('./config/dbConfig')
const app = express()
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))




app.post('/ping' , (req , res)=>{
    console.log(req.body);
    return res.json({message : 'pong'})
})

app.listen(serverconfig.PORT , async ()=>{
 await connectDB()    
 console.log(`SERVER GOT STARTED ON PORT NO. ${serverconfig.PORT}`);
  
})