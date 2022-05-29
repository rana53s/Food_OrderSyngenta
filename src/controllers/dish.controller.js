const express = require("express");
const router = express.Router();
const Dish = require("../models/dish.model");

router.post("", async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    return res.status(200).send(dish);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const dishes = await Dish.find()
      .populate({ path: "resturant_id", select: "resturant_name" })
      .populate({ path: "category_id", select: "category" })
      .populate({ path: "location_id", select: "location" })
      .lean()
      .exec();
    return res.status(200).send(dishes);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id)
      .populate({ path: "resturant_id", select: "resturant_name" })
      .populate({ path: "category_id", select: "category" })
      .populate({ path: "location_id", select: "location" })
      .lean()
      .exec();
    return res.status(200).send(dish);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    return res.status(200).send(dish);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
