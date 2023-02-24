const { Router } = require("express");
const { Auth } = require("../middleware/middlevare");
const { OrderModel } = require("../models/Order.model");

const OrderRouter = Router();

OrderRouter.get("/", Auth, async (req, res) => {
  const userID = req.body.userID;
  try {
    const data = await OrderModel.find({ userID: userID }).populate("userID", [
      "name",
      "email",
      "number",
    ]);
    res.send(data);
  } catch (error) {
    res.send({"msg":"Something went wrong","error":error.message});
  }
});

OrderRouter.post("/add", Auth, async (req, res) => {
  try {
    const data = new OrderModel(req.body);
    await data.save();
    res.send("Oreder data is added successfully");
  } catch (error) {
    res.send({"msg":"Something went wrong","error":error.message});
  }
});

module.exports = { OrderRouter };