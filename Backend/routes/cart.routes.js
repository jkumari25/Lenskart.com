const { CartModel } = require("../models/cart.model");
const express = require("express");


const CartRouter = express.Router();


CartRouter.post("/post", async (req, res) => {
    const data = req.body;
    try {
        await CartModel.insertMany(data);

        res.send(" Cart data has been sent successfully");
    } catch (error) {
        res.send("error");
    }
});


// get cartCarts 
CartRouter.get("/", async (req, res) => {
    try {
        const data = await CartModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

CartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await CartModel.findByIdAndDelete({ _id: id });
        res.send(" cart data has been deleted successfully");
    } catch (error) {
        console.log(error);
    }
});

CartRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await CartModel.findByIdAndUpdate({ _id: id });
        res.send(" cart data has been updated successfully");
    } catch (error) {
        console.log(error);
    }
});


CartRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      await CartModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send("user data updated successfully");
    } catch (error) {
      res.send({ msg: "something went wrong", error: error.message });
    }
  });




module.exports = {CartRouter };