import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    thumbs: { type: String, require: true },
    images: [{ type: String }],
    colors: [{ type: String }],
    price: { type: Number, require: true },
    priceOld: { type: Number, require: false },
    description: [{ type: String, require: true }],
    brand: { type: String, require: true },
    category: {
      type: String,
      require: true,
    },
    saleOffer: {
      status: { type: Boolean, default: false, require: true },
      discount: { type: Number, default: 0, require: true },
    },
    stock: { type: Number, require: true, default: 0 },
    sold: { type: Number, default: 0 },
    internal: [{ type: String, require: false }],
    ram: [{ type: String, require: false }],
    ratings: [
      {
        star: { type: Number },
        postedBy: { type: mongoose.Types.ObjectId, ref: "Users" },
        comment: { type: String },
      },
    ],
    totalRatings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", ProductSchema);
