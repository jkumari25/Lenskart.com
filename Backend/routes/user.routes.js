const { signupModel } = require("../models/signup.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const UserRouter = express.Router();
//sign up
UserRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body; 
    try {
        // we store hash in password DB.
        bcrypt.hash(password, 6, async (err, hash) => {

            if (err) {
                console.log(err);
            } else {
                const newData = new signupModel({
                    name,
                    email,
                    password: hash,
                });
                await newData.save();
                res.send("signup successful");
            }
        });
    } catch (error) {
        console.log(error);
        res.send("enter all the details ");
    }
});

//log in
UserRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await signupModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {

                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, process.env.KEY);
                    res.send({ status: "login successful", token: token });
                } else {
                    res.send("not authorised");
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.send("not autorised");
    }
});

//get ujser here
UserRouter.get("/", async (req, res) => {
    try {
        const data = await signupModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

module.exports = { UserRouter};


// "email": "saf24@gmail.com",
// "password": "saf123"