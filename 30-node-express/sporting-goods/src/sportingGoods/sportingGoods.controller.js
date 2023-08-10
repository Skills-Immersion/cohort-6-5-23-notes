// controller file does the job of defining handler functions, validators, and anything else route-handler-related

const sportingGoods = require('../data');

// list
const list = (req, res, next) => {
  res.send({ data: sportingGoods });
};

// create
// create a new sporting good based on the data in the request body
let nextId = 7;
const create = (req, res, next) => {
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
};

function validateSportingGoodExists(req, res, next) {
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // if it exists, send it back! if not, error handling time!
  if (index > -1) {
    next();
  } else {
    next({ status: 404, message: `Could not find sporting good with id ${req.params.id}` })
  }
}
const read = (req, res, next) => {
  // look for the good
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // send it back!
  res.send({ data: sportingGoods[index] })
};

const destroy = (req, res, next) => {
  // use the id from the request params to find the item we're trying to delete
  // shamelessly stolen from line 100
  let index = sportingGoods.findIndex(good => good.id === Number(req.params.id));
  // use splice to remove that item from the array
  sportingGoods.splice(index, 1);
  // send a response w/ a 204 status code
  res.status(204).send();
};

// export the functions for use in the router
module.exports = {
  list,
  create,
  read: [validateSportingGoodExists, read],
  destroy: [validateSportingGoodExists, destroy]
}
