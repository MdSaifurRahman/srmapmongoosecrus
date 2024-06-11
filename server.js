const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
//import url
let url = require('./url')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
mongoose.connect(url,{dbName : "newDb"}).then(()=>{
    console.log("Connection successful")
},(errRes)=>{
    console.log("Connection Failed - ",errRes)
})
app.use('/',productRoutes)
//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})
