const mongoose = require("mongoose");

const resturantSchema = new mongoose.Schema(
  {
    resturant_name: { type: String, required: true },
    // resturant_name: { type: String, required: true},
    // location: { type: String, required: true },
    // category: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("resturant", resturantSchema);
