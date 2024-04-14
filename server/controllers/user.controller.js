import { users } from "../Data.js";
import userModel from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import {
  generateToken,
  generateRefreshToken,
} from "../middlewares/Auth.middleware.js";
import jwt from "jsonwebtoken";
import cartModel from "../models/cart.model.js";

// @desc Import all users
// @route POST /api/users/import/all
// @access Private/Admin

const importUser = expressAsyncHandler(async (req, res) => {
  await userModel.deleteMany({}); // delete all users in database
  const createUsers = await userModel.insertMany(users); // insert all users from database
  res.status(201).send(createUsers);
});

// @desc Login user
// @route POST /api/users/login
// @access Public

const login = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user in the database
    const user = await userModel.findOne({ email });
    // check if user exists
    if (user) {
      // compare password
      if (bcrypt.compareSync(password, user.password)) {
        const accessToken = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        await userModel.findByIdAndUpdate(
          user._id,
          { refreshToken },
          { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.json({
          _id: user._id,
          name: user.fullname,
          email: user.email,
          phone: user.phone,
          image: user.image,
          isAdmin: user.isAdmin,
          token: accessToken, // generate token for authentication in the fontend
        });
      } else {
        res.status(401).json({ message: "Invalid passowrd" });
      }
    } else {
      res.status(401).json({ message: "Invalid Email" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Logout user
// @route POST /api/users/logout
// @access Public

const logout = expressAsyncHandler(async (req, res) => {
  try {
    const cookie = req.cookies;
    if (!cookie || !cookie.refreshToken) {
      res.status(401).json({ message: "No refresh token in cookies" });
    }
    await userModel.findOneAndUpdate(
      { refreshToken: cookie.refreshToken },
      { refreshToken: "" },
      { new: true }
    );
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    res.status(201).json({ message: "logout done!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Register new user
// @route POST /api/users
// @access Public

const register = expressAsyncHandler(async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;
    // find user by email
    const existUser = await userModel.findOne({ email });
    // check if user exists
    if (existUser) {
      res.status(401);
      throw new Error("User already exist");
    }
    // create new user
    else {
      const user = await userModel.create({
        fullName,
        email,
        phone,
        password: bcrypt.hashSync(password, 10), // hash password
      });
      // send reponse
      if (user) {
        res.status(200).json({
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          image: user.image,
          isAdmin: user.isAdmin,
          token: generateToken(user._id), // generate token for authentication in the fontend
        });
      } else {
        res.status(400);
        throw new Error("Invalid data");
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Update user profile
// @route PUT /api/users
// @access Private

const updateProfile = expressAsyncHandler(async (req, res) => {
  try {
    // find user by id
    const user = await userModel.findById(req.user._id);
    // check user exist
    if (user) {
      user.fullName = req.body.fullName || user.fullName;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;
      user.image = req.body.image || user.image;

      // save user
      const updatedUser = await user.save();
      //send response
      res.json({
        _id: updatedUser.id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser.id),
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc Change user password
// @route PUT /api/users/change-password
// @access Private

const changePassword = expressAsyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    // find user by id
    const user = await userModel.findById(req.user._id);
    // if old password is matched with new password
    if (user) {
      if (bcrypt.compareSync(oldPassword, user.password)) {
        user.password = bcrypt.hashSync(newPassword, 10);

        //save user
        await user.save();
        // send response
        res.json({ message: "Password change successfully" });
      } else {
        res.status(401);
        throw new Error("Invalid is Password");
      }
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc Delete user
// @route /api/users
// @access Private

const deleteUser = expressAsyncHandler(async (req, res) => {
  try {
    // find user by id and delete
    const user = await userModel.findByIdAndDelete(req.user._id);
    // check if user exist
    if (user) {
      res.json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User is found");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc Update user
// @route /api/users/update
// @access Private

const updateUserAddress = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const response = await userModel
      .findByIdAndUpdate(_id, { address: req.body.address }, { new: true })
      .select("-password -role -refreshToken");
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const refreshAccessToken = expressAsyncHandler(async (req, res) => {
  try {
    const cookie = req.cookies;
    if (!cookie || !cookie.refreshToken) {
      res.status(401).json({ message: "No refresh token in cookies" });
    }
    const decode = await jwt.verify(
      cookie.refreshToken,
      process.env.JWT_SECRET
    );
    const response = await userModel.findOne({
      _id: decode._id,
      refreshToken: cookie.refreshToken,
    });
    res
      .status(201)
      .json({ newAccessToken: generateToken({ _id: reponse._id }) });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc Add to wishlist
// @route PUT /api/users/wishlist
// @access Private

const addToWishlist = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { pid } = req.params;
  try {
    const user = await userModel.findById(_id);
    const already = user.wishlist.find((id) => id.toString() === pid);
    if (already) {
      let user = await userModel
        .findByIdAndUpdate(_id, { $pull: { wishlist: pid } }, { new: true })
        .select("wishlist");
      res.status(201).json(user);
    } else {
      let user = await userModel
        .findByIdAndUpdate(_id, { $push: { wishlist: pid } }, { new: true })
        .select("wishlist");
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc get wishlist
// @route GET /api/users/wishlist
// @access Private

const getWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const findUser = await userModel
      .findById(_id)
      .select("wishlist")
      .populate("wishlist");
    res.status(201).json(findUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const updateCart = expressAsyncHandler(async (req, res) => {
  try {
    const { productId, color, storage, quantity, price, image } = req.body;
    const { _id } = req.user;
    const alreadyCartItem = await cartModel.findOne({ userId: _id, productId });
    if (alreadyCartItem) {
      alreadyCartItem.color = color || alreadyCartItem.color;
      alreadyCartItem.storage = storage || alreadyCartItem.storage;
      alreadyCartItem.quantity = quantity || alreadyCartItem.quantity;
      await alreadyCartItem.save();
      res.status(201).json(alreadyCartItem);
    } else {
      const newCart = await new cartModel({
        userId: _id,
        productId,
        color,
        price,
        storage,
        quantity,
        image,
      }).save();
      res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const getUserCart = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const cart = await cartModel.find({ userId: _id }).populate("productId");
    res.status(201).json(cart);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const deleteUserCart = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { cid } = req.params;
    const cart = await cartModel.deleteOne({ userId: _id, _id: cid });
    res.status(201).json(cart);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const updateUserQuantityCart = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { cid } = req.params;
    const { newquantity } = req.body;
    console.log(newquantity);
    const cartItem = await cartModel.findOne({ userId: _id, _id: cid });
    if (cartItem) {
      cartItem.quantity = Number(newquantity);
      await cartItem.save();
      res.status(201).json(cartItem);
    } else {
      res.status(201).json({ message: "Cart is not found" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export {
  importUser,
  login,
  logout,
  register,
  updateProfile,
  changePassword,
  deleteUser,
  updateUserAddress,
  refreshAccessToken,
  addToWishlist,
  getWishlist,
  updateCart,
  getUserCart,
  deleteUserCart,
  updateUserQuantityCart,
};
