/**
 * Routes for auth
 */

const express = require ("express");
const router = express.Router();

// add new user
router.post ("/register", async (req, res) => {
    try {
        const{ username, password } =req.body;
        //validera input
        if (!username || !password) {
            return res.status(400).json ({error: "invalid input, send username and password"})
        }
        // correct save user
        res.status(201).json({message: "user created"});
    } catch (error) {
        res.status(500).json({error: "server error"});
    }
});

//login user
router.post ("/login", async (req, res) =>{
    console.log ("Login called...");
});

module.exports = router;