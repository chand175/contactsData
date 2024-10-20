
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/contact")
.then(()=>{
    console.log("database is connected")
})
.catch((err)=>{
    console.log(`error is ${err}`)
})