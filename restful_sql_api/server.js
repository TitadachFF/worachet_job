const express = require("express");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurant.router")
const sql = require("./models/db");
const PORT = 5000;

//Create service
 const app = express();
 
 //use middleware
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
res.send("<h1>This is a RESTful API for restaurant</h1>");
})
app.use("/" , restaurantRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port"${PORT}`);


})