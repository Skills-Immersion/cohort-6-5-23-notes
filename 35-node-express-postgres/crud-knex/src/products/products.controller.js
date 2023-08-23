// import methods from the products service
const { 
  listAll, 
  listOutOfStockCountService, 
  listPriceSummaryService, 
  readService
} = require("./products.service");

// import asyncErrorBoundary function to handle errors in async functions
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// async function that handles a request to list all products
// gets data from the service function 'listAll'
// sends data as a response in JSON format
async function list(req, res, _next) {
    const data = await listAll();
    res.json({ data });
}

// async function that handles a request to get a single product by id
// gets product_id from request parameters
// gets data from the service function 'readService'
// sends data as a response in JSON format
async function read(req, res, _next) {
  const { productId } = req.params;
  const data = await readService(productId); // test with await readService(productId) in res.json
  res.json({data});
}

// async function that handles a request to get the count of out-of-stock products
// gets data from the service function 'listOutOfStockCountService'
// sends data as a response in JSON format'
async function listOutOfStockCount(req, res, _next) {
  const data = await listOutOfStockCountService();
  res.json({data});
}

// async function that handles a request to get a summary of product prices
// gets data from the service function 'listPriceSummaryService'
// sends data as a response in JSON format
async function listPriceSummary(req, res, _next) {
  const data = await listPriceSummaryService();
  res.json({data});
}

// export the functions as methods of an object, wrapping them with asyncErrorBoundary to handle any errors
// that may occur during the execution of these async functions
module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
    listPriceSummary: asyncErrorBoundary(listPriceSummary),
};
