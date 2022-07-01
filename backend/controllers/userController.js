const Food = require("../models/foodModel");

const getAvailable = async(req,res) => {
    const foods = await Food.find({available: "true"}).sort({quantity:-1});
    // const foods=undefined
   
 if(!foods){
    res.json({msg:"stock out"})
 }else{
    res.json(foods)
 }
}

const getAllFoods = async(req,res) => {
    const foods = await Food.find({}).sort({quantity:-1});
    res.json(foods);
}

const createFood = async(req,res) => {
    const {name,price,desc,available,quantity} = req.body;
    const food = await Food.create({
        name,price,desc,quantity,available
    })
    res.json(food);
}
// /:id
const getFood = async(req,res) => {
    const {id} = req.params;
    const food = await Food.findById(id)

    if(!food){
        res.json({err:"food not found"});
    }else{
        res.json(food)
    }
}

const updateFood = async(req,res) => {
    const {id} = req.params;

    const food = await Food.findByIdAndUpdate(id,{
        ...req.body
    })

    if(!food){
        res.json({err:"food not found"});
    }else{
        res.json({msg:"food updated"})
    }

}

const deleteFood = async(req,res) => {
    const {id} = req.params;
    const food = await Food.findByIdAndDelete(id);

    if(!food){
        res.json({err:"food not found"});
    }else{
        res.json(food)
    }
}



module.exports = {
    getAllFoods,createFood,getFood,updateFood,deleteFood,getAvailable
}