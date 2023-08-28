const express = require("express");
const router = express.Router();
const Restaurant = require("../controller/restaurant.controller");

// http://localhost:5000/restaurant
router.post("/restaurants", async (req, res) => {
    try {
        const newRestaurant = req.body;
        console.log(newRestaurant);
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant);
    } catch (error) {
        res.status(500).json({
            error: "Failed to create restaurant"
        });
    }
});
router.get("/restaurants", async(req, res)=>{
try{

<<<<<<< HEAD
const restaurants = await Restaurant.getAll();
res.status(200).json(restaurants);
} catch (error){
    res.status(500).json({error: "Failed to get all restaurants"})
}   
})

//Get Restaurant by ID
router.get("/restaurants/:id", async(req, res)=>{
try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.getById(restaurantId);
        res.json(restaurant)
    }catch(error){
        res.status(500).json({error: "Failed to get restaurant by id"});

    }
})

//Update a restaurant data
router.put("/restaurants/:id", async(req, res)=>{
try {
    const restaurantId = req.params.id;
    const restaurantData = req.body;
    const updateRestaurant = await Restaurant.updateById
    (restaurantId,restaurantData 
        );
        res.status(200).json(updateRestaurant);
    }catch (error) {
        if (error.kind === "not_found"){
            res.status(400).json({error: "Restaurant not found"});
        }else{
            res.status(500).json({error: "Failed to update restaurant data"});
        }

        }
            
    });
        
    

    
    //Delete a restaurant
    router.delete("/restaurant/:id", async(req, res)=>{
        try {
            const restaurantId = req.params.id;
            const isDeleted = await Restaurant.removeById(restaurantId);
            if(isDeleted){
                res
                .status(200)
                .json({
                    message: "Restaurant id" + restaurantId + "is deleted",
                    isDeleted: isDeleted,
                });
            }
        } catch (error) {
            if (error.kind === "not_found"){
                res.status(404).json({error: "Restaurant not found"});

            }else{
                res.status(500).json({error: "Failed to update restaurant data"});
            }
        }

    });
module.exports = router;
=======
router.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.getAll();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({
            error: "Failed to get all restaurants"
        });
    }
});

router.get("/restaurants/:id", async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.getById(restaurantId);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({
            error: "Failed to get restaurant by id"
        });
    }
});

router.put("/restaurants/:id", async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurantData = req.body;
        const updatedRestaurant = await Restaurant.updateById(restaurantId, restaurantData);
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        if (error.kind === "not_found") {
            res.status(400).json({
                error: "Restaurant not found"
            });
        } else {
            res.status(500).json({
                error: "Failed to update restaurant data"
            });
        }
    }
});

router.delete("/restaurants/:id", async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const isDeleted = await Restaurant.removeById(restaurantId);
        if (isDeleted) {
            res.status(204).json({
                message: "Restaurant id " + restaurantId + " is deleted",
                isDeleted: isDeleted,
            });
        }
    } catch (error) {
        if (error.kind === "not_found") {
            res.status(404).json({
                error: "Restaurant not found"
            });
        } else {
            res.status(500).json({
                error: "Failed to delete restaurant data"
            });
        }
    }
});

module.exports = router;
>>>>>>> 5917fc43546bcd9ab181f39fee6296eef4d93bd0
