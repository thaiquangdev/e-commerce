import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";

// @desc Authenticated user & get token
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "30d" } // token will expire in 30 days
  );
};

// protect routes
const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  // check if token is send in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token
      token = req.headers.authorization.split(" ")[1];
      // decode token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // get user by id
      req.user = await userModel.findById(decode.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token fail" });
    }
  }
  // check if token is not send in the header
  if (!token) {
    res.status(401).json({ message: "Not authorized, token fail" });
  }
});

export { generateToken, protect };
