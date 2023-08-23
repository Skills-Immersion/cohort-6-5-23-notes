// Import methods from the articles service module.
// These methods interface with the database or other data source.
// 'getAllArticles' will retrieve all articles.
// 'createArticle' will add a new article.
// 'readArticle' will fetch a single article by id.
// 'updateArticle' will modify an existing article.
// 'destroyArticle' will delete an article.
const {
    getAllArticles,
    createArticle,
    readArticle,
    updateArticle,
    destroyArticle
} = require("./articles.service");

// Import the error boundary helper function.
// This function wraps async functions to ensure errors are handled correctly.
// Define the async functions to list, create, read, update and destroy articles.
// Each function is wrapped with 'asyncErrorBoundary' to ensure errors are passed to error handling middleware.
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// try {
//     async function list(req, res, _next) {
//         let data = await getAllArticles();
//         res.json({data})
//     }
//     async function list(req, res, _next) {
//         let data = await getAllArticles();
//         res.json({data})
//     }
//     async function list(req, res, _next) {
//         let data = await getAllArticles();
//         res.json({data})
//     }
//     async function list(req, res, _next) {
//         let data = await getAllArticles();
//         res.json({data})
//     }
// } catch (error) {
    
// }
// 'list' function fetches all articles and sends the data as a JSON response.
async function list(req, res, _next) {
    let data = await getAllArticles();
    res.json({data})
}
// 'create' function adds a new article using the request body data, 
// and sends the newly created article data as a JSON response.
async function create(req, res, _next) {
    let data = await createArticle(req.body);
    res.json({data})
}
// 'destroy' function deletes an article using the 'articleId' from request parameters, 
// and sends the deleted article data as a JSON response.
async function destroy(req, res, _next) {
    let data = await destroyArticle(req.params.articleId);
    res.json({data})
}
// 'update' function modifies an existing article using the 'articleId' from request parameters 
// and the request body data, and sends the updated article data as a JSON response.
async function update(req, res, _next) {
    let data = await updateArticle(req.params.articleId, req.body);
    res.json({data})
}
// 'read' function fetches a single article using the 'articleId' from request parameters,
// and sends the article data as a JSON response.
async function read(req, res, _next) {
    let data = await readArticle(req.params.articleId);
    res.json({data})
}
// Export the wrapped functions.
// These wrapped functions can now be used as route handlers in an Express application.
module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: asyncErrorBoundary(read),
    update: asyncErrorBoundary(update),
    destroy: asyncErrorBoundary(destroy)
}