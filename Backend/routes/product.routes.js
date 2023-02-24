const { ProductModel } = require("../models/product.model");
const express = require("express");
const jwt = require("jsonwebtoken");

const ProductRouter = express.Router();

//post products
ProductRouter.post("/post", async (req, res) => {
    const data = req.body;
    try {
        await ProductModel.insertMany(data);

        res.send("data has been sent");
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message});
    }
});


//get products data
ProductRouter.get("/data", async (req, res) => {
    try {
        const data = await ProductModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

ProductRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await ProductModel.findByIdAndDelete({ _id: id });
        res.send("data has been deleted successfully");
    } catch (error) {
        console.log(error);
    }
});


ProductRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send("user data updated successfully");
    } catch (error) {
      res.send({ msg: "something went wrong", error: error.message });
    }
  });
module.exports = {ProductRouter };