import mongoose from "mongoose";

const BannerProductSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  imagesBanner: {
    type: Array,
    require: true,
  },
  images: {
    type: Array,
    require: false,
  },
});

export default mongoose.model("BannerProducts", BannerProductSchema);
