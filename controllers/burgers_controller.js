var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.getAll(function(burger_data) {

      res.render("index", { burger_data });
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:burger_id", function(req, res) {
    burger.update(req.params.burger_id, function(result){

    console.log(result);
    res.redirect("/burgers");
    // res.sendStatus(200);
    });
  });
  
module.exports = router;