var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chappodelivery", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log('Now listening on http://localhost:' + PORT);
});
