const express = require("express");
const router = express.Router();
const Location = require("../models/location.model");
const Dish = require("../models/dish.model");

router.post("", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    return res.status(200).send(location);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.get("", async (req, res) => {
//   try {
//     const locations = await Location.find()
//     //   .populate({ path: "resturant_id", select: "resturant_name" })
//       .lean()
//       .exec();
//     return res.status(200).send(locations);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const location = await Location.findById(req.params.id)
//       //   .populate({ path: "resturant_id", select: "resturant_name" })
//       .lean()
//       .exec();
//     return res.status(200).send(location);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

router.get("", async (req, res) => {
  try {
    const dishes = await Dish.find()
      //   .populate({ path: "resturant_id", select: "resturant_name" })
      .select("+location")
      .populate({ path: "resturant_id", select: "resturant_name" })
      .populate({ path: "category_id", select: "category" })
      .lean()
      .exec();
    return res.status(200).send(dishes);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id)
      // .populate({ path: "resturant_id", select: "resturant_name" })
      // .populate({ path: "category_id", select: "category" })
      .lean()
      .exec();
    const dishesh = await Dish.find().lean().exec();
    return res.status(200).send(dishesh);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    return res.status(200).send(location);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
