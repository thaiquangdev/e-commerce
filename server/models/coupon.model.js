import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    uppercase: true,
  },
  expiry: {
    type: Date,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("Coupons", couponSchema);
