const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB Connected...");
};

module.exports = connectDB;
