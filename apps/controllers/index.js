var express = require("express");
var router = express.Router();
router.get(["/home", "/"], require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
module.exports = router;