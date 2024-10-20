

const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({


    firstName:{
        type : String,
        require : true
    },
    lastName:{
        type : String,
        require : true
    },
   email:{
        type : String,
        require : true,
        unique: true,       
        lowercase: true,   
        trim: true  
    },
    message:{
        type : String,
        require : true,
    }

},{timestamps :true});



const ContactMe = new mongoose.model("ContactMe",contactSchema );

module.exports = ContactMe;  

