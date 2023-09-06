const { restart } = require("nodemon");
const Restaurant = require("../models/restaurant.model")

Restaurant.createRestaurant = async (newRestaurant) => {
    try {
        const createRestaurant = await Restaurant.create(newRestaurant)
        console.log("create restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err", error);
        throw err;
    }
}
//get all restaurants
Restaurant.getAll = async () => {
    try{
        const restaurants = await Restaurant.findAll()
        
        return restaurants.map(restaurant => restaurant.toJSON());


    }catch (error){
        console.error("error:",error);
        throw error;
    }
};
//Get Restaurant By ID
Restaurant.getById = async(restaurantId)=>{
try {
    const restaurant = await Restaurant.findByPk(restaurantId);
    if(restaurant){
        
        return restaurant.toJSON();
    }
    else{
throw { kind: "not_found"};
    }
} catch (error) {
    console.error("error:",error);
    throw error;
    
}   };
//Update a restaurant
Restaurant.updateById = async (id, restaurantData)=>{
try {
        const [rowUpdated] = await Restaurant.update(restaurantData,{
            where: {id},

        });
        if (rowUpdated ===0){
            throw {kind: "not_found"};
        }
        return {id: id,...restaurantData};
    }catch (error) {
        console.log("error:" ,error);
        throw error;
    }
};
//delete a restaurant
Restaurant.removeById = async(id)=>{
    try {
        const rowDeleted = await Restaurant.destroy({where: {id}});
        if(rowDeleted === 0){
            throw{kind: "not_found"};
        }
        return true
    }catch (error) {
        console.log("error",error);
        throw error;
    }
};

Restaurant.getAll = async () => {
    try {
        const restaurants = await Restaurant.findAll();

        return restaurants.map(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error:", error);
        throw error;

    }
}

Restaurant.getById = async (restaurantId) => {
    try {
        const restaurants = await Restaurant.findByPk(restaurantId);
        if (restaurants) {
            return restaurants.toJSON();
        } else {
            throw {
                kind: "not found"
            };

        }
    } catch (error) {
        console.error("error:", error);
        throw error;

    }
}

Restaurant.updateById = async (id, restaurantData) => {
    try {
        const [rowUpdated] = await Restaurant.update(restaurantData, {
            where: {
                id
            },
        });
        if (rowUpdated === 0) {
            throw {
                kind: " not_found"
            };
        }
        return {
            id: id,
            ...restaurantData
        };
    } catch (error) {
        console.log("error:", error);
        throw error;
    }
};

Restaurant.removeById = async (id) => {
    try {
        const rowDelete = await Restaurant.destroy({
            where: {
                id
            }
        });
        if (rowDelete === 0) {
            throw {
                kind: "not found"
            };
        }
        return ture
    } catch (error) {
        console.log("error:", error);
        throw error;
    }
};


module.exports = Restaurant;