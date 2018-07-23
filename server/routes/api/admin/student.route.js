const express = require("express");
const mongoose = require("mongoose");
const router =express.Router();

router.get("/",(req,res,next)=>{
    return res.json({students : []});
});

router.post("/new",(req,res,next)=>{

});

router.post("/update",(req,res,next)=>{

});

router.post("/delete",(req,res,next)=>{

});

module.exports = router; 