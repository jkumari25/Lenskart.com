const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    main_image: { type: String, required: true },
    product_details_box: { type: Number, required: true },
    rating_count: { type: Number, required: true },
    product_details_box2: { type: String, required: true },
    size_details: { type: String, required: true },
    price_text: { type: String, required: true },
    prev_price: { type: String, required: true },
    color: { type: String, required: true },
    offer_box: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true }
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
