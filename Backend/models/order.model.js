const mongoose = require("mongoose");

const date = new Date().toString().split(" ");
let str = "";
for (let i = 0; i < date.length - 4; i++) {
  str += date[i] + " ";
}

const OrderSchema = mongoose.Schema(
  {
    first_name: String ,
    last_name: String ,
    city:String,
    address:  String ,
    pincode:  Number ,
    country:String,
    order:{type:String , default:"placed"},
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    time:{type:String ,default:str},
  
   
  },
  { versionKey: false }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = { OrderModel };