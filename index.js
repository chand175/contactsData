

const express = require("express");



const app = express()
//port
const port = process.env.PORT || 4000

//mongodb required
require("./database/connections")

//require routes
const contactRouters = require("./routes/contactRoutes");

//middleware router
app.use(express.json());


app.get("/" , (req,res)=>{

    res.send("hii this is chand")


})



//Routes
app.use("/api/contact",contactRouters);


app.listen(port , ()=>{
    console.log(`server is running on the port :${port}`)
})