const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res, next) => {
  res.send('root');
})

const pokemonRouter = require('./pokemon/pokemon.router');
app.use('/pokemon', pokemonRouter);


// error handling
app.use((error, req, res, next) => {
  console.log('ERROR HANDLING')
  console.log(error);
  const { status = 500, message = 'Something went wrong' } = error;
  res.status(status).send({ error: message });
})

module.exports = app;
