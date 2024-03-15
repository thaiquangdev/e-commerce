import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDb.js";
import { initalRoute } from "./routes/index.js";
import { errorHandler } from "./middlewares/Error.middleware.js";

// dotenv config
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect database
connectDb();

// main router
app.get("/", (req, res) => {
  res.send("Hello word");
});

// other routes
initalRoute(app);

// error handle
app.use(errorHandler);

const port = process.env.PORT || 5500;

//listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
