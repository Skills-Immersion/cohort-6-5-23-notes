const express = require('express');
const app = express();

// good stuff will go here in the future

// Middleware! When requests come in, do some work and then move on to the next function (in our case, the handler that calls res.send)

// app.use does fuzzy matching, so even with the '/' in there, this will match every request
// app.use works for all HTTP methods (GET, POST, PUT, DELETE, etc)
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

// HTTP method (get)
//      path ('/potato')
//                  handler function
app.get('/potato', (req, res, next) => {
  res.send('potatoes are delicious');
})

const getCurrentTime = (req, res, next) => {
  res.send(`The current time is ${new Date().toTimeString()}`)
};

app.get('/current-time', getCurrentTime)

function validateItemExists(req, res, next) {
  let { item } = req.query;
  if (!item) {
    next('must provide an item');
  } else {
    next();
  }
}

// sportsball route - tells the client whether the included item is a sporting good
app.get('/is-it-sport', validateItemExists, (req, res, next) => {
  // console.log(req);
  console.log(req.query);
  const { item } = req.query;
  if (item.includes('sport') || item.includes('ball')) {
    res.send(`${item} is a sporting good`);
  } else {
    res.send('that is not a sporting good');
  }
})

// TODO:
// Write a route that find the nearest available of an item.
// The route should listen for a GET request to "/nearest".
// The item should be a query parameter with a key of item.
// The response should look like "The closest <item> is <n> miles away" where n is a random int between 1 and 10.

// 'http://localhost:5000/nearest?item=soccer ball'
app.get('/nearest', validateItemExists, (req, res, next) => {
  let { item } = req.query;
  res.send(`The closest ${item} is ${Math.floor(Math.random() * 10) + 1} miles away`);
})

app.get('/goods/my-orders', (req, res, next) => {
  res.send('You recently ordered a soccer ball and two goals');
})

// part of the URL with a :colon is a route parameter
// 'http://localhost:5000/goods/soccer ball'
app.get('/goods/:good', (req, res, next) => {
  console.log(req.params);
  res.send(`Yes, we have ${req.params.good} in stock!`)
})

// app.use((req, res, next) => {
//   res.send('route not found');
// })

//error handler
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message ? error.message : error);
})

module.exports = app;
