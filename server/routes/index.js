import userRoute from "./user.route.js";
import categoryRoute from "./category.route.js";
import productRoute from "./product.route.js";
import bannerProductRoute from "./bannerProduct.route.js";

export const initalRoute = (app) => {
  app.use("/api/users", userRoute);
  app.use("/api/categories", categoryRoute);
  app.use("/api/products", productRoute);
  app.use("/api/bannerproduct", bannerProductRoute);
};
