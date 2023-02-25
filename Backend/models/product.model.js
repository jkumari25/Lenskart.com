const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product_image: { type: String, required: true },
  rating_value: { type: String, required: true },
  rating_count:  { type: String, required: true },
  product_name : { type: String, required: true },
  size: { type: String, required: true },
  tags: { type: String, required: true },
  product_price: { type: Number, required: true },
  strike_through: { type: String, required: true },
  product_offer: { type: String, required: true },
  category: { type: String, required: true },
  id: { type: Number, required: true },
},{versionKey:false},);

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };





// product_image: ""
// rating_value: "5.3"
// rating_count:  "12"
// product_name : "safwan"
// size: "medium"
// tags: 32
// product_price: 23,
// strike_through: "men cassual"
// product_offer: "999 only"
// category: "men"
// id: 1,
