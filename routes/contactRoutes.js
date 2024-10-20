
const express = require("express")

const contactme = require("../models/contectModel")


const router = express.Router()


//required controllers 

const { 
    getContact,
    getSingleData,
    createData,
    updateContacts,
    deletecontact,

} = require("../controllers/ContactController")




// get enter recourd
router.get("/", getContact);


//get single data
router.get('/:id', getSingleData);

//create reacourd 

router.post('/' , createData);

//update recourd

router.patch('/:id' , updateContacts);

//delete recourd
router.delete("/:id", deletecontact);






module.exports = router