var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Product = require("./../model/product");
var ProductService = require("./../services/productService");

router.get("/", async function (req, res) {
    res.render("product.ejs");
    // try {
    //     var productService = new ProductService();
    //     var products = await productService.getProductList();
    //     res.render("product.ejs", { products });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'An error occurred while fetching products' });
    // }
});

router.get("/add-product", async function (req, res) {
    res.render("add-product.ejs");
});

router.get("/product-list", async function (req, res) {
    var productService = new ProductService();
    var product = await productService.getProductList();
    res.json(product);
});

router.get("/get-product", async function (req, res) {
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
    res.json(pro);
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
