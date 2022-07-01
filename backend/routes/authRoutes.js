const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const private = require("../middlewares/private");

router.get("/private",private,(req,res)=>{
    console.log(req.user)
   res.json(req.user);
})

router.post("/signup",(req,res)=>{
    const {name,email,password} = req.body;

    if(!email || !name || !password){
     return res.json({msg:"fill out all the fields"})   
    }
    
    User.findOne({email})
    .then((user)=>{
        if(user){
            return res.json({err:"user already exists try login in"})
        }

        bcrypt.hash(password,12)
        .then((hashedPassword)=>{
            User.create({
                name,email,password:hashedPassword
            }).then((createdUser)=>{
                res.json(createdUser)
            }).catch(err => console.log(err))
        })


    }).catch(err => console.log(err))

})

router.post("/signin",(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.json({err:"fill out all the fields"})
    }

    User.findOne({email})
    .then((user)=>{
        if(!user){
            return res.json({msg:"sign up first"})
        }

        bcrypt.compare(password,user.password)
        .then((match)=>{
            if(!match){
                return res.json({err:"Passwords dont match"})
            }

            // generate token
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
            res.json({token})
        })
    })
})

module.exports = router;