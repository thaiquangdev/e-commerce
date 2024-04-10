import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      default:
        "https://ui-avatars.com/api/?background=DDEDFC&color=3474E3&name=Profile&size=1",
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    wishlist: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    ],
    address: {
      type: Array,
      default: [],
    },
    refreshToken: {
      type: String,
    },
    passwordChangeAt: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpire: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
