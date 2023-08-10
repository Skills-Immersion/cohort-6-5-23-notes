// router file does the job of assigning which handler functions run on each route

const express = require('express');
const router = express.Router();

const controller = require('./sportingGoods.controller');

// attach routes to the router

router.route('/')
  .get(controller.list)
  .post(controller.create);
// router.get('/goods', controller.list);
// router.post('/goods', controller.create)

router.route('/:id')
  .get(controller.read)
  .delete(controller.destroy);
// router.get('/goods/:id', controller.read)
// router.delete('/goods/:id', controller.destroy )

// export the router so we can require it from another file
module.exports = router;
