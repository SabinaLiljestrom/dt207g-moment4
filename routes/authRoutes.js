/**
 * Routes for auth
 */

const express = require ("express");
const router = express.Router();
const mongoose = require ("mongoose");
const jwt = require ("jsonwebtoken");
require("dotenv").config();

//coonect to mongoose
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("connected to MongoDb");
}).catch((error) => {
    console.error("Error connecting to database:", error.message);
});


// user model
const User = require("../models/User");

// add new user
router.post ("/register", async (req, res) => {
    try {
        const{ username, password } =req.body;
        // validera input
         // Validera användarnamn
         if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }

        // Validera lösenord
        if (!password) {
            return res.status(400).json({ error: "Password is required" });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long" });
        }

        // correct save user
        const user = new User ({ username, password});
        await user.save();

        res.status(201).json({message: "user created"});
    } catch (error) {
        res.status(500).json({error: "server error"});
    }
});

//login user
router.post ("/login", async (req, res) =>{
    try {
        const{ username, password } = req.body;
        // validera input
        // Validera användarnamn
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        // Validera lösenord
        if (!password) {
            return res.status(400).json({ error: "Password is required" });
        }
       //finns användare
       const user = await User.findOne ({ username});
       if(!user){
        return res.status(401).json({ error : "fel användarnamn!"});
       }
       const isPasswordMatch = await user.comparePassword (password);
       if(!isPasswordMatch){
        return res.status(401).json({ error : "fel lösenord!"});
       } else {
        //skapa jwt
        const payload = { username: username};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
        const response = {
            message: "User logged in!",
            token: token
        }
        res.status(200).json({ response });
       }
       
    } catch (error) {
        res.status(500).json({error: "server error"});
    }
});

module.exports = router;