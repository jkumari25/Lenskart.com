const express = require("express");
const { connect } = require("./config/db");

const jwt = require("jsonwebtoken");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const { UserRouter } = require("./routes/user.routes");
const { ProductRouter } = require("./routes/product.routes");
const { CartRouter } = require("./routes/cart.routes");
const { Auth } = require("./middleware/middlevare");
const { OrderRouter } = require("./routes/order.routes");


const App = express();
App.use(express.json());

App.use(cors({origin: "*"}));

App.get("/", (req, res) => {
    res.send("You are Welcome ");
});



App.use("/user",UserRouter)
App.use("/product" , ProductRouter)
App.use("/order",OrderRouter)
App.use (Auth)
App.use("/cart" ,CartRouter)





//sign up
// App.post("/signup", async (req, res) => {
//     const { name, email, password } = req.body; 
//     try {
//         // we store hash in password DB.
//         bcrypt.hash(password, 6, async (err, hash) => {

//             if (err) {
//                 console.log(err);
//             } else {
//                 const newData = new signupModel({
//                     name,
//                     email,
//                     password: hash,
//                 });
//                 await newData.save();
//                 res.send("signup successful");
//             }
//         });
//     } catch (error) {
//         console.log(error);
//         res.send("enter all the details ");
//     }
// });

// //log in
// App.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await signupModel.find({ email });
//         if (user.length > 0) {
//             bcrypt.compare(password, user[0].password, (err, result) => {

//                 if (result) {
//                     const token = jwt.sign({ name: "masai" }, "masai");
//                     res.send({ status: "login successful", token: token });
//                 } else {
//                     res.send("not authorised");
//                 }
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.send("not autorised");
//     }
// });
// //get ujser here
// App.get("/user", async (req, res) => {
//     try {
//         const data = await signupModel.find();
//         res.send(data);
//     } catch (error) {
//         console.log(error);
//         res.send(error);
//     }
// });

// //post products
// App.post("/post", async (req, res) => {
//     const data = req.body;
//     try {
//         await ProductModel.insertMany(data);

//         res.send("data has been sent");
//     } catch (error) {
//         res.send("error");
//     }
// });


// //get products data
// App.get("/data", async (req, res) => {
//     try {
//         const data = await ProductModel.find();
//         res.send(data);
//     } catch (error) {
//         console.log(error);
//         res.send(error);
//     }
// });


//post cart products
// App.post("/post/cart", async (req, res) => {
//     const data = req.body;
//     try {
//         await CartModel.insertMany(data);

//         res.send("data has been sent successfully");
//     } catch (error) {
//         res.send("error");
//     }
// });

//get cartproducts 
// App.get("/cart", async (req, res) => {
//     try {
//         const data = await CartModel.find();
//         res.send(data);
//     } catch (error) {
//         console.log(error);
//         res.send(error);
//     }
// });

//delete
// App.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
//         await CartModel.findByIdAndDelete({ _id: id });
//         res.send("data has been deleted successfully");
//     } catch (error) {
//         console.log(error);
//     }
// });


//port
App.listen(8000, async () => {
    try {
        await connect;
        console.log(" connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log(`App running at port 8000`);
});