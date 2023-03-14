var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Product = require("./../model/product");
var ProductService = require("./../services/productService");

router.get("/", function (req, res) {
    res.json({ "message": "this is product" });
});

router.get("/product-list", async function (req, res) {
    var productService = new ProductService();
    var product = await productService.getProductList();
    res.json(product);
});
router.get("/get-product/:_id", async function (req, res) {
    var productService = new ProductService();
    var product = await productService.getProduct(req.query.id);
    res.json(product);
});

router.post("/insert-product", async function (req, res) {
    var productService = new ProductService();
    var pro = new Product();
    pro.Name = req.body.Name;
    pro.Price = req.body.Price;
    var result = await productService.insertProduct(pro);
    res.json({ status: true, message: "" });
});

router.post("/update-product", async function (req, res) {
    var productService = new ProductService();
    var pro = new Product();
    pro._id = new ObjectId(req.body.Id);
    pro.Name = req.body.Name;
    pro.Price = req.body.Price;
    await productService.updateProduct(pro);
    res.json({ status: true, message: "" });
});

router.delete("/delete-product", async function (req, res) {
    var productService = new ProductService();
    await productService.deleteProduct(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;