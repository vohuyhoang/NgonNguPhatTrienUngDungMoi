var express = require("express");

var app = express();
app.use(express.json());

var controller = require(__dirname + "/apps/controllers");
app.use(controller);

app.use("/public", express.static(__dirname + "/public"));

app.set("views", __dirname + "/apps/views");
app.set("/particle", express.static(__dirname + "/apps/particle"));
app.set("view engine", "ejs");

var server = app.listen(3000, function () {
    console.log("Server started on port 3000");
});