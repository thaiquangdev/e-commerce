import mongoose from "mongoose";

const BannerProductSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  imagesBanner: [{ type: String }],
  images: [{ type: String }],
});

export default mongoose.model("BannerProducts", BannerProductSchema);
