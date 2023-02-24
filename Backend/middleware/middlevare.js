const jwt = require("jsonwebtoken");
require("dotenv").config();


const Auth = (req, res, next) => {
    const token = req.headers?.authorization;
  
    if (!token) {
      return res.status(401).send("please login first");
    }
  
    try {
      const decoded = jwt.verify(token, process.env.KEY);
  
      req.body.userID = decoded.userID;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).send("please login first");
    }
  };
  
  module.exports = {

    Auth,
  };