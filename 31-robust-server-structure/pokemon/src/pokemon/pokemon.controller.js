const { createId } = require('@paralleldrive/cuid2');
const knex = require('../db/connection');
const { pokemon } = require('../data');

function list(req, res, next) {
  // go get the data from the database and send it back to the client
  knex('pokemon')
    .select('*')
    .then(data => res.json({
      data: data.map(
        ({ id, pokemon_name, pokemon_type, popularity }) => ({
          id,
          popularity,
          name: pokemon_name,
          type: pokemon_type
        }))
    }))
}

function findPokemon(req, res, next) {
  const { id } = req.params;
  const index = pokemon.findIndex(p => p.id === id);
  if (index > -1) {
    res.locals.index = index;
    next();
  } else {
    next({
      status: 404,
      message: `no pokemon with id ${id}`
    })
  }
}
function read(req, res, next) {
  const { index } = res.locals;
  res.json({ data: pokemon[index] })
}

// TODO: validate our properties
// req.body.data must exist
// name, type, popularity should all exist
// popularity should be a number between 1 and 10

function validateBodyData(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      status: 400,
      message: 'Request body must contain a key of data'
    })
  }
}

function validateProperties(req, res, next) {
  let properties = ['name', 'type', 'popularity'];
  for (let property of properties) {
    if (!req.body.data[property]) {
      return next({
        status: 400,
        message: `missing property ${property}`
      })
    }
  }
  next();
}

function validatePopularity(req, res, next) {
  let { popularity } = req.body.data;
  if (typeof popularity === 'number' && popularity >= 1 && popularity <= 10) {
    next();
  } else {
    next({
      status: 400,
      message: "popularity must be a number between 1 and 10"
    })
  }
}

function create(req, res, next) {
  // get extra data about the new pokemon to be created
  // that data comes in the request body, req.body
  let { name, type, popularity } = req.body.data;
  let coolNewPokemon = {
    name,
    type,
    popularity,
    id: createId()
  }
  // save that object into my array of pokemon
  pokemon.push(coolNewPokemon);
  // send the object back in the response
  // status code 201 for Created
  res.status(201).json({ data: coolNewPokemon });
}

function update(req, res, next) {
  let { index } = res.locals;
  let { name, type, popularity } = req.body.data;
  // adding the new data from the request into a new object to represent that pokemon
  let newPokemonData = {
    ...pokemon[index],
    name,
    type,
    popularity
  }
  pokemon[index] = newPokemonData;
  res.json({ data: newPokemonData })
}

function destroy(req, res, next) {
  // use the ID from the req.params to tell knex what to delete
  knex('pokemon')
    // WHERE id = req.params.id
    .where('id', req.params.id)
    .del()
    // and then send our response
    .then((numberOfRows) => {
      console.log('number of rows:', numberOfRows)
      if (numberOfRows > 0) {
        res.status(204).send()
      } else {
        next({
          status: 404,
          message: 'not found'
        })
      }
    })
}

module.exports = {
  list,
  read: [findPokemon, read],
  create: [
    validateBodyData,
    validateProperties,
    validatePopularity,
    create
  ],
  update: [
    findPokemon,
    validateBodyData,
    validateProperties,
    validatePopularity,
    update
  ],
  destroy: destroy
}
