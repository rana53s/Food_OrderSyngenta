const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    order_status: { type: String, default: false },
    cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("order", OrderSchema);
