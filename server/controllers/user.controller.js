import { users } from "../Data.js";
import userModel from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.middleware.js";

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
        res.json({
          _id: user._id,
          name: user.fullname,
          email: user.email,
          phone: user.phone,
          image: user.image,
          isAdmin: user.isAdmin,
          token: generateToken(user._id), // generate token for authentication in the fontend
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

export {
  importUser,
  login,
  register,
  updateProfile,
  changePassword,
  deleteUser,
};
