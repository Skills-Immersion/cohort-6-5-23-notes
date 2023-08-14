const express = require('express');

const router = express.Router();

const controller = require('./pokemon.controller');

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
