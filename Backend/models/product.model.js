const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    main_image: { type: String, required: true },
  product_details_box: { type: Number, required: true },
  rating_count:  { type: Number, required: true },
  product_details : { type: String, required: true },
  size_details: { type: String, required: true },
  price_text: { type: Number, required: true },
  prev_price: { type: Number, required: true },
  color: { type: String, required: true },
  offer_box: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
  img4: { type: String, required: true }
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };