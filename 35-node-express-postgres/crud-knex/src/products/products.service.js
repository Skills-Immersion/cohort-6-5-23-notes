// import knex for database operations
const knex = require("../db/connection");
// import mapProperties utility for mapping properties to an object
const mapProperties = require("../utils/mapProperties")

// setup a mapping function to add supplier details to a product object
const addSupplier = mapProperties({
    supplier_id: "supplier.supplier_id",
    supplier_name: "supplier.supplier_name",
    // other info you care about
});

// function to list all products from the 'products' table
function listAll() {
   //  SELECT * FROM products
   return knex("products").select("*")
}

// function to get the count of products that are out of stock from the 'products' table
function listOutOfStockCountService() {
    // SELECT COUNT(*) FROM products WHERE product_quantity_in_stock = 0 GROUP BY product_quantity_in_stock
    return knex("products")
        .count("product_quantity_in_stock")
        .where({product_quantity_in_stock: '0'})
        .groupBy("product_quantity_in_stock")
}

// function to get a summary (minimum, maximum, average) of product prices grouped by supplier from the 'products' table
function listPriceSummaryService() {
    // SELECT min(product_price), max(product_price), avg(product_price) FROM products GROUP BY supplier_id
    return knex("products")
        .select("supplier_id as s")
        .min("product_price")
        .max("product_price")
        .avg("product_price")
        .groupBy("s")
}

// function to get a single product, joined with its supplier, from the 'products' table using product id
function readService(product_id) {
    // SELECT * FROM products JOIN suppliers ON products.supplier_id = suppliers.supplier_id WHERE products.product_id = product.product_id
    return knex("products as p")
        .select("*")
        .join("suppliers as s","p.supplier_id","s.supplier_id")
        .where({product_id})
        .first()
        .then(addSupplier) // map property function found in util. If it is confusing make sure to ask me in the afternoon lecture
}

// export the service functions
module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService,
    readService,
};