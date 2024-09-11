/**
 * Webbtjänst för moment 4
 * Av Sabina Liljeström
 */

const express = require("express");
const bodyParser = require ("body-parser");
const authRoutes = require ("./routes/authRoutes");
require("dotenv").config();

//init express
const app = express ();
let port = process.env.PORT || 3000;
app.use(bodyParser.json());

//routes
app.use("/api", authRoutes);

//starta applikation
app.listen(port, () => {
    console.log (`server running at http://localhost:${port}`);
})