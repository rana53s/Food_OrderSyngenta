const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

// const cors = require("cors");
// app.use(cors());

const connect = require("./configs/db");

const dishController = require("./controllers/dish.controller");
const resturantController = require("./controllers/resturant.controller");
const categoryController = require("./controllers/category.controller");
const locationController = require("./controllers/location.controller");

app.use("/dishes", dishController);
app.use("/resturants", resturantController);
app.use("/category", categoryController);
app.use("/location", locationController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.log("err: ", err);
  }
  console.log(`Server running on Port ${PORT}`);
});
