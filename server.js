// npm packages
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");

// dependencies
var passport = require("./config/passportConfig");
var db = require("./models");

// server initialization
var app = express();
var PORT = process.env.PORT || 3339;

//express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// passport middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/middleware/auth");

// routes
app.use("/", require("./routes/index"));
app.use("/users/", require("./routes/users"));

// sync db and start server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
