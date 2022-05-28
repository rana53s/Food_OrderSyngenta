const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    dish_name: { type: String, required: true },
    price: { type: Number, required: true },
    resturant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "resturant",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("dish", dishSchema);
