const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.post("", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).send(category);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const categories = await Category.find()
      //   .populate({ path: "resturant_id", select: "resturant_name" })
      .lean()
      .exec();
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
      //   .populate({ path: "resturant_id", select: "resturant_name" })
      .lean()
      .exec();
    return res.status(200).send(category);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.status(200).send(category);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
