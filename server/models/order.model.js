import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      require: true,
    },

    shippingInfo: {
      fullname: { type: String },
      address: { type: String, require: true },
      city: { type: String, require: true },
      email: { type: String, require: true, lowercase: true },
      phoneNumber: { type: String },
      postalCode: { type: Number, require: true },
      other: { type: String, require: true },
    },
    payments: {
      paypalOrderId: {
        type: String,
        required: true,
      },
      paypalPaymentId: {
        type: String,
        required: true,
      },
      paymentToken: {
        type: String,
        required: true,
      },
      paymentPayerId: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        productId: {
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

    orderStatus: {
      type: String,
      require: "Ordered",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", OrderSchema);
