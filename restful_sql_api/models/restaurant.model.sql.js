const router = require("../routes/restaurant.router.sql");
const sql = require("./db.sql");
//Constructor
const Restaurant = function (restaurant) {
    //Atrributes
    this.name = restaurant.name
    this.type = restaurant.type
    this.imageurl = restaurant.imageurl;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurants SET name,type,imageurl VALUES("KFC","FASTFOOD","url")
    sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        //ไม่มี error เกิดขึ้น
        console.log("new restaurant created");
        result(null, {
            id: res.id,
            ...newRestaurant
        })
    });
}
//Get all restaurant
Restaurant.getAll = (result) => {
    //SELECT * FROM restautants
    sql.query("SELECT * FROM restaurants", (err, res) => {
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error เกิดขึ้น
        console.log("new restaurant created");
        result(null, res);
    });
};
//Get by ID
Restaurant.getById = (restaurantId, result) => {
    // SELECT * FROM restaurants WHERE id = restaurantId
    sql.query("SELECT * FROM restaurants WHERE id = ?", [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.length === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was found
        console.log("Restaurant found");
        result(null, res);
    });
};

//Update
Restaurant.updateById = (restaurantId, updatedData, result) => {
    // UPDATE restaurants SET ... WHERE id = restaurantId
    sql.query("UPDATE restaurants SET ? WHERE id = ?", [updatedData, restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was updated
        console.log("Restaurant updated");
        result(null, res);
    });
};

//Delete
Restaurant.deleteById = (restaurantId, result) => {
    // DELETE FROM restaurants WHERE id = restaurantId
    sql.query("DELETE FROM restaurants WHERE id = ?", [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // Restaurant with the given ID was not found
            result({
                message: "Restaurant not found [ID]"
            }, null);
            return;
        }

        // No error occurred and the restaurant was deleted
        console.log("Restaurant deleted");
        result(null, res);
    });
};


module.exports = Restaurant;