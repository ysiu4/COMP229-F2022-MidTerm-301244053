// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the car model
let car = require("../models/cars");

/* GET cars List page. READ */
router.get("/", (req, res, next) => {
  // find all cars in the cars collection
  car.find((err, cars) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("cars/index", {
        title: "Cars",
        cars: cars,
      });
    }
  });
});

//  GET the Car Details page in order to add a new Car
router.get("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  // DONE
   res.render('cars/add', {
    title: 'Add a Car',
  });
});

// POST process the Car  Details page and create a new Car  - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  // DONE
  new_car_record = {
    Carname: req.body.Carname,
    Category: req.body.Category,
    Carmodel: req.body.Carmodel,
    Price: parseInt(req.body.Price),
  };
  car.create(new_car_record, (err, car_record) => {
    if (err) {
      console.log('Insert document error: ' + err);
    }
    res.redirect('/cars');
  });
});

// GET the Car Details page in order to edit an existing Car
router.get("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  // DONE
  let id = req.params.id;
  car.findById(id, (err, car_record) => {
    if (err) {
      console.log('Find document error: ' + err);
      res.redirect('/cars');
    } else {
      res.render('cars/details', {
        title: 'Edit a Car',
        cars: car_record,
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  // DONE
   new_car_record = {
    Carname: req.body.Carname,
    Category: req.body.Category,
    Carmodel: req.body.Carmodel,
    Price: parseInt(req.body.Price),
  };
  let id = req.params.id;
  car.updateOne({_id: id}, new_car_record, (err, car_record) => {
    if (err) {
      console.log('Update document error: ' + err);
    }
    res.redirect('/cars');
  });
});

// GET - process the delete
router.get("/delete", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

module.exports = router;
