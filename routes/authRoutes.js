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