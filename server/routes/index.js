import userRoute from "./user.route.js";
import categoryRoute from "./category.route.js";

export const initalRoute = (app) => {
  app.use("/api/users", userRoute);
  app.use("/api/categories", categoryRoute);
};
