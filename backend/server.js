require("dotenv").config();

const express = require('express');
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middlewares
app.use(express.json());
// routes
 app.use("/foods",foodRoutes); 
 app.use("/users",authRoutes); 
 
// get all users

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on ${process.env.PORT} and connected to db`)
    })
})
.catch(err=>console.log(err))
// port
