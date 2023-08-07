const express = require('express');
const app = express();

// good stuff will go here in the future

// Middleware! When requests come in, do some work and then move on to the next function (in our case, the handler that calls res.send)

app.use((req, res, next) => {
  console.log('a request came in');
  next();
});

// Routes! On a particular path, for a particular HTTP method, what should the server do and what should we send in the response?
app.get('/', (req, res, next) => {
  res.send('this is the root route for our sporting goods app, hooray!');
})

app.get('/potato', (req, res, next) => {
  res.send('potatoes are delicious');
})

const getCurrentTime = (req, res, next) => {
  res.send(`The current time is ${new Date().toTimeString()}`)
};

app.get('/current-time', getCurrentTime)

module.exports = app;
