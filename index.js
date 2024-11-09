const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Server checking
app.get("/", (req, res)=>{
    res.send("Auth server is running....")
})
app.listen(port , ()=>{
    console.log(`Auth server is running on: ${port}`);
})