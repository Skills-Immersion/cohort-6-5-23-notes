const { createId } = require('@paralleldrive/cuid2');
const { pokemon } = require('../data');

function list(req, res, next) {
  res.json({ data: pokemon })
}

function read(req, res, next) {
  const { id } = req.params;
  const index = pokemon.findIndex(p => p.id === id);
  if (index > -1) {
    res.json({ data: pokemon[index] })
  } else {
    next({
      status: 404,
      message: `no pokemon with id ${id}`
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

module.exports = {
  list,
  read,
  create
}
