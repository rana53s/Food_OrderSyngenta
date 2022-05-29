const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const carts = await Cart.find().lean().exec();
    return res.status(200).send(carts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).lean().exec();
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
