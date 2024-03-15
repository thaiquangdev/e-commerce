import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    images: [{ type: String }],
    price: { type: Number, require: true },
    description: { type: String, require: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      require: true,
    },
    tags: [{ type: String }],
    saleOffer: {
      status: { type: Boolean, default: false, require: true },
      discount: { type: Number, default: 0, require: true },
    },
    stock: { type: Number, require: true, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Products", ProductSchema);
