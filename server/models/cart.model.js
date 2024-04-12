import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true },
  color: { type: String, require: true },
  storage: { type: String, require: true },
});

export default mongoose.model("Carts", cartSchema);
