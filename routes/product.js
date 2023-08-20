const express = require("express");
const router = express.Router();

// initializing products controller

const productsController = require("../controllers/product_controller");

// to get all the products
router.get("/", productsControllers.products);

// to create a product
router.post("/create", productsControllers.create);

// to delete a product using it's ID
router.delete("/:productID", productsControllers.delete);

// to update the quantity of a product
router.post("/:productID/update_quantity/", productsControllers.updateQunatity);

module.exports = router;
