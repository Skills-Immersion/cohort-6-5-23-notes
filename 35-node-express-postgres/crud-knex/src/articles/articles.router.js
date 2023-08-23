// Require the express router object.
// This object helps us create modular and mountable route handlers.
const articlesRouter = require("express").Router()



// Destructure the methods from the articles controller.
// These methods are responsible for CRUD operations on articles.
// 'list' will retrieve all articles.
// 'create' will add a new article.
// 'read' will fetch a single article by id.
// 'update' will modify an existing article.
// 'destroy' will delete an article.
const { list, create, read, update, destroy } = require("./articles.controller");


// Routes for "/articles" endpoint.

// GET /articles: Fetch all articles.
// This route calls the 'list' method from the articles controller to retrieve all articles.
articlesRouter.route("/").get(list);

// POST /articles: Create a new article.
// This route calls the 'create' method from the articles controller to add a new article.
articlesRouter.route("/").post(create);

// Routes for "/articles/:articleId" endpoint.
// GET /articles/:articleId: Fetch a specific article.
// This route calls the 'read' method from the articles controller to retrieve a single article by id.
articlesRouter.route("/:articleId").get(read);

// PUT /articles/:articleId: Update a specific article.
// This route calls the 'update' method from the articles controller to modify an existing article by id.
articlesRouter.route("/:articleId").put(update);

// DELETE /articles/:articleId: Delete a specific article.
// This route calls the 'destroy' method from the articles controller to delete an article by id.
articlesRouter.route("/:articleId").delete(destroy);

// Export the router.
// The router with its configured routes can now be imported and used in other parts of the application.
module.exports = articlesRouter;