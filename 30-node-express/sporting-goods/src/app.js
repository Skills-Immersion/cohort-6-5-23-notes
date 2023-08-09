const express = require('express');
const app = express();

const sportingGoods = require('./data');

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

const potato = require('./getCurrentTime');

app.get('/current-time', potato)

// HTTP method (get)
//      path ('/potato')
//                  handler function
app.get('/potato', (req, res, next) => {
  res.send('potatoes are delicious');
})

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
  res.semd(`The closest ${item} is ${Math.floor(Math.random() * 10) + 1} miles away`);
})


// goods CRUD goes here

// list
app.get('/goods', (req, res, next) => {
  res.send({ data: sportingGoods });
})

// create
let nextId = 7;
// create a new sporting good based on the data in the request body
app.post('/goods', (req, res, next) => {
  // grab the data we want from the request body
  // assign an ID
  let newSportingGood = {
    name: req.body.data.name,
    description: req.body.data.description,
    price: req.body.data.price,
    id: nextId
  }
  nextId++;
  // save the new data into our array of sporting goods
  sportingGoods.push(newSportingGood);
  // send back the data in the response
  res.status(201).send({ data: newSportingGood });
})

function validateSportingGoodExists(req, res, next) {
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // if it exists, send it back! if not, error handling time!
  if (index > -1) {
    next();
  } else {
    res.status(404).send(`Could not find sporting good with id ${req.params.id}`)
  }
}

// read
// get one sporting good by its ID
app.get('/goods/:id', validateSportingGoodExists, (req, res, next) => {
  // look for the good
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // send it back!
  res.send({ data: sportingGoods[index] })
})

// destroy
app.delete('/goods/:id', validateSportingGoodExists, (req, res, next) => {
  // use the id from the request params to find the item we're trying to delete
  // shamelessly stolen from line 100
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // use splice to remove that item from the array
  sportingGoods.splice(index, 1);
  // send a response w/ a 204 status code
  res.status(204).send();
})

//error handler
// 2 main ways to get to error handling
// 1. A real JS code error (res.semd is not a function, could not read property blah of undefined)
// 2. We realize in one of our middleware/handler functions that there's an error,
//    so we call next('some argument');

// 404
app.use((req, res, next) => {
  res.status(404).send(`path not found: ${req.path}`)
})
app.use((error, req, res, next) => {
  console.log('ERROR HANDLING')
  console.log(error);
  res.status(500).send(error.message ? error.message : error);
})

module.exports = app;
