const express = require('express');
const router = express.Router();
const {getAllFoods,createFood,getFood, updateFood, deleteFood,getAvailable} = require("../controllers/userController");

// get all users
// /foods/
router.get('/',getAllFoods)

router.get("/available",getAvailable)
// get single user
// /foods/:id
router.get("/:id",getFood)

// create a user
// /roots/
router.post("/",createFood)

// update a user
// /roots/:id
router.patch("/:id",updateFood)

// delete a user
// /foods/:id
 router.delete("/:id",deleteFood)

//  available router


module.exports = router;