var express = require("express");
var router = express.Router();
router.use(["/home", "/"], require(__dirname + "/homecontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/login", require(__dirname + "/api/authenticatecontroller"));
module.exports = router;