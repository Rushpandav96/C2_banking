const express = require("express");
const User = require("../model/branch.model");
const router = express.Router();

router.post("", async(req,res) =>{
    try{
        const post = await User.create(req.body);
        return res.send(post);
    }catch(err){
        return res.send(err);
    }
});

router.get("", async(req,res) =>{
    try{
        const allusers = await User.find().lean().exec();
        return res.send(allusers);
    }catch(err){
        return res.send(err);
    }
});

router.get("/:id", async(req,res) =>{
    try{
        const oneuser = await User.findById(req.params.id).lean().exec();
        return res.send(oneuser);
    }catch(err){
        return res.send(err);
    }
});

router.patch("/:id", async(req,res) =>{
    try{
        const chuser = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        return res.send(chuser);
    }catch(err){
        return res.send(err);
    }
});


router,delete("", async(req, res)=>{
    try{
        const deluser = await User.findByIdAndUpdate(req.params.id);
        return res.send(deluser);
    }catch(err){
        return res.send(err);
    }
});

module.exports = router;