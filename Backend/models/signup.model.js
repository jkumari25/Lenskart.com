const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
},{versionKey:false},);

const signupModel = mongoose.model("signup", signupSchema);

module.exports = { signupModel };