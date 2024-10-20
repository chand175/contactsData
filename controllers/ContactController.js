
const express = require("express")

const contacts = require("../models/contectModel") 


// get all data
const getContact = async (req,res)=>{
    try {
        const contactData = await contacts.find().sort({ createdAt: -1 });
        res.status(200).json(contactData);
      

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}



//get single data

const getSingleData = async (req,res)=>{
    try {
        const id = req.params.id;
        const singleData = await contacts.findById({_id : id});
        res.status(200).send(singleData);

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}


//create recoud
const createData = async (req,res)=>{
    try {
       
        const Data = new contacts(req.body);
        const addData =await Data.save();
        res.status(200).send(addData);

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}


//UPDATE RECOURD    
const updateContacts = async (req,res)=>{
    try{
        const id = req.params.id ;
        const updateData = await contacts.findByIdAndUpdate({_id :id}, req.body ,{new : true});
        res.status(200).json(updateData);

    }catch(err){
        res.status(404).json({error: err.message});
    }
}

//delete recourd
const deletecontact =async(req ,res)=>{
    try{
        const id = req.params.id ;
        const deleteId = await contacts.findByIdAndDelete({_id:id});
        res.status(200).json(deleteId);
    }catch(err){
        res.status(404).json({error: err.message});
      
    }
}



module.exports = {
    getContact,
    getSingleData,
    createData,
    updateContacts,
    deletecontact,

}