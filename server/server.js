import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParse from "cookie-parser";
import { connectDb } from "./config/connectDb.js";
import { initalRoute } from "./routes/index.js";
import { errorHandler } from "./middlewares/Error.middleware.js";

// dotenv config
dotenv.config();
const app = express();
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);

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
