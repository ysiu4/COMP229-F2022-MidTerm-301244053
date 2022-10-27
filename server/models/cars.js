///////////////////////////////////////////////////////
// File: config/app.js
// Student name: Yuk Ming Siu
// Student ID: 301244053
// App name: My Favourite Cars (Mid Term Test)
///////////////////////////////////////////////////////

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
