/**
 * Routes for auth
 */

const express = require ("express");
const router = express.Router();

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
        // Kontrollera användarnamn och lösenord
        if (username !== "Sabina") {
            return res.status(401).json({ error: "Invalid username" });
        }
        if (password !== "12345678") {
            return res.status(401).json({ error: "Invalid password" });
        }
        // om allt stämmer
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({error: "server error"});
    }
});

module.exports = router;