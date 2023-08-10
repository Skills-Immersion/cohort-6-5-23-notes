const express = require('express');
const app = express();

// 30.8 module review
// create function review
// testing the create function
// writing an update function


// good stuff will go here in the future

// Middleware! When requests come in, do some work and then move on to the next function (in our case, the handler that calls res.send)

// app.use does fuzzy matching, so even with the '/' in there, this will match every request
// app.use works for all HTTP methods (GET, POST, PUT, DELETE, etc)
app.use(express.json());
app.use('/', (req, res, next) => {
  console.log('a request came in');
  next();
});

// Routes! On a particular path, for a particular HTTP method, what should the server do and what should we send in the response?
// app.get does NOT do fuzzy matching, so this will only match the root route and no other routes
// app.get only matches GET requests
app.get('/', (req, res, next) => {
  res.send('this is the root route for our sporting goods app, hooray!');
})

// goods CRUD goes here

const sportingGoodsRouter = require('./sportingGoods/sportingGoods.router');
app.use('/goods', sportingGoodsRouter);

//error handler
// 2 main ways to get to error handling
// 1. A real JS code error (res.semd is not a function, could not read property blah of undefined)
// 2. We realize in one of our middleware/handler functions that there's an error,
//    so we call next('some argument');

// 404
app.use((req, res, next) => {
  next({ status: 404, message: `path not found: ${req.path}` })
})
app.use((error, req, res, next) => {
  console.log('ERROR HANDLING')
  console.log(error);
  const { status = 500, message = 'Something went wrong' } = error;
  res.status(status).send({ error: message });
})

module.exports = app;
