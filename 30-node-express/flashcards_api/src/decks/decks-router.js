const router = require("express").Router();
const { list, create, read, destroy } = require("./decks-controller");
const { listCardsForDeck } = require('../cards/cards-controller');
const cardsRouter = require('../cards/cards-router');

router
  .route("/")
  .get(list)
  .post(create);

router
  .route("/:deckId")
  .get(read)
  .delete(destroy);

// Option 1: write a separate route handler
// router
//   .route('/:deckId/cards')
//   .get(listCardsForDeck);
  
// Option 2: mount the entire cards router within the decks router
router.use('/:deckId/cards', cardsRouter);

module.exports = router;
