const { CartModel } = require("../models/cart.model");
const express = require("express");


const CartRouter = express.Router();


CartRouter.post("/post", async (req, res) => {
    const data = req.body;
    try {
        await CartModel.insertMany(data);

        res.send("data has been sent successfully");
    } catch (error) {
        res.send("error");
    }
});


// get cartproducts 
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
        res.send("data has been deleted successfully");
    } catch (error) {
        console.log(error);
    }
});

// CartRouter.patch("/update/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
//         await CartModel.findByIdAndUpdate({ _id: id });
//         res.send("data has been update successfully");
//     } catch (error) {
//         console.log(error);
//     }
// });


module.exports = {CartRouter };