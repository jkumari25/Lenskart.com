const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product_image: { type: String, required: true },
    rating_value: { type: String, required: true },
    rating_count:  { type: String, required: true },
    product_name : { type: String, required: true },
    size: { type: String, required: true },
    tags:{ type: String, required: true },
    product_price: { type: Number, required: true },
    strike_through: { type: String, required: true },
    product_offer: { type: String, required: true },
    category: { type: String, required: true },
    id: { type: Number, required: true },
    
},{versionKey:false},);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
