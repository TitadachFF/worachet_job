const {
    DataTypes
} = require("sequelize");
const sequelize = require("./db");

const Restaurant = sequelize.define("restaurant", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW

    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
});

Restaurant.sync({force: false}).then( ()=>{
    console.log("db existed");
}).catch((err)=>{
    console.log("created db");
})

module.exports = Restaurant;
