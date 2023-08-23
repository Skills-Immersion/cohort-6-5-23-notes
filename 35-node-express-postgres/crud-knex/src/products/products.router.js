// import express and define a Router object
const router = require("express").Router();

// import methods from the products controller
const { list, listOutOfStockCount, listPriceSummary, read } = require("./products.controller");

// route handler for GET requests to '/products' endpoint
// 'list' method will be used from the products controller to handle this route
router.route("/").get(list);

// custom routes!

// route handler for GET requests to '/products/out-of-stock-count' endpoint
// 'listOutOfStockCount' method will be used from the products controller to handle this route
router.route("/out-of-stock-count").get(listOutOfStockCount);

// route handler for GET requests to '/products/price-summary' endpoint
// 'listPriceSummary' method will be used from the products controller to handle this route
router.route("/price-summary").get(listPriceSummary);

// route handler for GET requests to '/products/:product_id' endpoint where :product_id is a variable
// 'read' method will be used from the products controller to handle this route
// This route is useful for accessing a specific product by its id
router.route("/:productId").get(read);

// exporting the router to be used in other parts of the application
module.exports = router;