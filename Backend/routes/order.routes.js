const express = require("express");
const {OrderModel} = require("../models/order.model");

const OrderRouter = express.Router();


OrderRouter.get("/",async(req,res)=>{
    const userId = req.body.userId;
    try {
        const data  = await OrderModel.find()
        res.send(data)
        
    } catch (error) {
        res.send(error)
    }
});

OrderRouter.post("/add",async(req,res)=>{
    try {
        const data  = new OrderModel(req.body)
        await data.save()
        res.send("data is added")
    } catch (error) {
        res.send(error)
    }
});


module.exports ={OrderRouter}