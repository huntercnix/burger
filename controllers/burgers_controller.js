var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/burgers");
    });


    router.get("/burgers", function (req, res) {

    
    burger.selectAll(function (data) {
      var hbsObject = {
        burgers: data 
      };

      res.render("index", hbsObject);
    });
  
});
    


router.post("/", function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
    res.redirect("/");
  });
});


// router.post("/:id", function (req, res) {
//   var condition = "id + " + req.params.id;

//   burger.updateOne({devoured: req.body.devoured}, condition, function() {
//     res.redirect("/burger")
//   });
// });
router.post("/:id", function (req,res) {
  var id = req.params.id;

  console.log("id", id);

  burger.updateOne(id, function() {
    res.redirect("/");
  });
});


module.exports = router;