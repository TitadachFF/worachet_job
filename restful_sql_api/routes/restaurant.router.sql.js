const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model.sql");

// INSERT restaurant to database
router.post("/restaurants", (req, res) => {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        image: req.body.image
    });

    // http://localhost:5000/restaurants
    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while inserting the new restaurant"
            });
        } else {
            res.send(data);
        }
    });
});

// Get all restaurants
router.get("/restaurants", (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        } else {
            res.send(data);
        }
    });
});

// Get restaurant by ID
router.get("/restaurants/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.getById(restaurantId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the restaurant"
            });
        } else if (!data) {
            res.status(404).send({
                message: "Restaurant not found [ID]"
            });
        } else {
            res.send(data);
        }
    });
});

// Update restaurant
router.put("/restaurants/:id", (req, res) => {
    const restaurantId = req.params.id;
    const updatedData = req.body; // Assuming the updated data is provided in the request body

    Restaurant.updateById(restaurantId, updatedData, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the restaurant"
            });
        } else {
            res.send(data);
        }
    });
});

// Delete restaurant
router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.deleteById(restaurantId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the restaurant"
            });
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
