import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      require: true,
    },
    orderItems: [
      {
        size: { type: String, require: true },
        color: { type: String, require: true },
        name: { type: String, require: true },
        quantity: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          require: true,
        },
      },
    ],
    shippingAddress: {
      fullname: { type: String },
      address: { type: String, require: true },
      email: { type: String, require: true, lowercase: true },
      location: { type: String },
      phoneNumber: { type: String },
      city: { type: String, require: true },
      postalCode: { type: String, require: true },
      shippingMethod: { type: String },
      shippingCost: { type: Number },
    },
    payments: {
      paymentMethod: { type: String },
      status: { type: String, default: "pending", require: true },
      paymentDate: { type: Date },
    },
    delivery: {
      status: { type: String, default: "awaiting", require: true },
      deliveryDate: { type: Date },
      deliveryMethod: { type: String },
    },
    totalPrice: { type: Number, require: true },
    subTotalPrice: { type: Number, require: true },
    taxPrice: { type: Number, require: true, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", OrderSchema);
