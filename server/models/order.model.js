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
    shippingInfo: {
      fullname: { type: String },
      address: { type: String, require: true },
      city: { type: String, require: true },
      email: { type: String, require: true, lowercase: true },
      phoneNumber: { type: String },
      postalCode: { type: Number, require: true },
      state: { type: String, require: true },
      other: { type: String, require: true },
    },
    payments: {
      razorpayOrderId: {
        type: String,
        require: true,
      },
      razorpayPaymentId: {
        type: String,
        require: true,
      },
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          require: true,
        },
        color: {
          type: String,
        },
        ram: {
          type: String,
        },
        storage: {
          type: String,
        },
        quantity: {
          type: Number,
          require: true,
        },
        price: {
          type: Number,
          require: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    totalprice: {
      type: Number,
      require: true,
    },
    totalpriceAfterDiscount: {
      type: Number,
      require: true,
    },
    orderStatus: {
      type: String,
      require: "Ordered",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", OrderSchema);
