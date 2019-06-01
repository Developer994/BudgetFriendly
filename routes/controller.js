var express = require("express");
var db = require("../models");
var router = express.Router();

// The main index page
router.get("/", function(req, res) {
  res.render("index", {
    style: "style.css"
  });
});

module.exports = router;
