var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Pokemon is listening on PORT: " + PORT);
});
