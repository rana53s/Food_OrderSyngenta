const express = require("express");
const router = express.Router();

const Resturant = require("../models/resturant.model");

router.post("", async (req, res) => {
  try {
    const resturant = await Resturant.create(req.body);
    return res.status(200).send(resturant);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const resturants = await Resturant.find().lean().exec();
    return res.status(200).send(resturants);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resturant = await Resturant.findById(req.params.id).lean().exec();
    return res.status(200).send(resturant);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resturant = await Resturant.findByIdAndDelete(req.params.id);
    return res.status(200).send(resturant);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
