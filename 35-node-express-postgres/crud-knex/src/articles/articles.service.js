// Import the database connection object.
// This object is used to execute queries against the database.
const db = require("../db/connection");

// Define the 'getAllArticles' function.
// This function retrieves all articles from the 'articles' table in the database.
function getAllArticles() {
    return db("error").select("*");
}

// Define the 'createArticle' function.
// This function adds a new article to the 'articles' table in the database.
// 'newArticle' is an object containing the data for the new article.
// The function returns the newly created article.
function createArticle(newArticle) {
    return db("articles")
        .insert(newArticle)
        .returning("*")
        .then( rows => {
            console.log(rows);
            return rows[0]
        })
}

// Define the 'readArticle' function.
// This function fetches a single article from the 'articles' table in the database.
// 'article_id' is the id of the article to fetch.
// The function returns the fetched article.
function readArticle(article_id) {
    return db("articles")
        .select("*")
        .where({article_id});
}

// Define the 'destroyArticle' function.
// This function deletes an article from the 'articles' table in the database.
// 'article_id' is the id of the article to delete.
// The function does not return any value.
function destroyArticle(article_id) {
    return db("articles")
        .select("*")
        .where({article_id})
        .delete()
}

// Define the 'updateArticle' function.
// This function updates an existing article in the 'articles' table in the database.
// 'article_id' is the id of the article to update.
// 'updatedArticle' is an object containing the new data for the article.
// The function returns the updated article.
function updateArticle(article_id, updatedArticle) {
    return db("articles")
        .select("*")
        .where({ article_id })
        .update(updatedArticle, "*")
        .then((updatedRecords) => updatedRecords[0]);
}

// Export the functions.
// These functions can now be imported and used in other parts of the application to interact with the 'articles' table in the database.
module.exports = {
    getAllArticles,
    createArticle,
    readArticle,
    destroyArticle,
    updateArticle
};