var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");

// READ route for retrieving burgers
router.get("/", function(req, res) {
  db.Burger.findAll({raw: true}).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// CREATE route for adding new burgers
router.post("/api/burgers", function(req, res) {
  db.Burger.create(req.body).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

// UPDATE route for devouring burgers
router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update(req.body.devoured,
    {
      where: {
        id: req.params.id
      },
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
});

// DELETE route for removing burgers that have displeased us
router.delete('/api/burgers/:id', function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

// Export routes for server.js to use.
module.exports = router;
