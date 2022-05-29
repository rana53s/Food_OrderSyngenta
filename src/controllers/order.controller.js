const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

router.post("", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(200).send(order);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const order = await Order.find().lean().exec();
    return res.status(200).send(order);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
