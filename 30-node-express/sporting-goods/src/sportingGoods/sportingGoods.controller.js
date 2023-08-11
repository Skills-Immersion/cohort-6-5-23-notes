// controller file does the job of defining handler functions, validators, and anything else route-handler-related

const sportingGoods = require('../data');

// list
const list = (req, res, next) => {
  res.send({ data: sportingGoods });
};

// function validateNameInBody(req, res, next) {
//   if (req.body.data && req.body.data.name) {
//     next();
//   } else {
//     next({
//       status: 400,
//       message: `You did not include the name in your request.body.data.`
//     })
//   }
// }

// function validateDescriptionInBody(req, res, next) {
//   if (req.body.data && req.body.data.description) {
//     next();
//   } else {
//     next({
//       status: 400,
//       message: `You did not include the description in your request.body.data.`
//     })
//   }
// }

// generates a validator function for the given property
function validatorFor(property) {
  return function (req, res, next) {
    if (req.body.data && req.body.data[property]) {
      next();
    } else {
      next({
        status: 400,
        message: `You did not include the ${property} in your request.body.data.`
      })
    }
  }
}
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
  // in the future...
  // get the sporting good from our database, and if it exists, we'll save the whole sporting good into res.locals

  // if it exists, send it back! if not, error handling time!
  if (index > -1) {
    // save the index into res.locals for use in read/destroy
    res.locals.index = index;
    res.locals.potato = sportingGoods[index];
    next();
  } else {
    next({ status: 404, message: `Could not find sporting good with id ${req.params.id}` })
  }
}
const read = (req, res, next) => {
  // use the index that we found in the validateSportingGoodExists function
  let { potato } = res.locals;
  // send it back!
  res.send({ data: potato })
};

const destroy = (req, res, next) => {
  // use index from validateSportingGoodExists
  let { index } = res.locals;
  // use splice to remove that item from the array
  sportingGoods.splice(index, 1);
  // send a response w/ a 204 status code
  res.status(204).send();
};

// export the functions for use in the router
module.exports = {
  list,
  create: [...(['name', 'description', 'price'].map(validatorFor)), create],
  read: [validateSportingGoodExists, read],
  destroy: [validateSportingGoodExists, destroy]
}
