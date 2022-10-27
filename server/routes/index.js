///////////////////////////////////////////////////////
// File: config/app.js
// Student name: Yuk Ming Siu
// Student ID: 301244053
// App name: My Favourite Cars (Mid Term Test)
///////////////////////////////////////////////////////

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
