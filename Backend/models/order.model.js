const mongoose = require("mongoose");


const OrderSchema = mongoose.Schema(
  {
    address: { type: String },
    city: { type: String },
    pincode: { type: Number },
    totalPrice: { type: Number },
    product: [],
    
    
    
   
  },
  { versionKey: false ,timestamps:true}
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = { OrderModel };