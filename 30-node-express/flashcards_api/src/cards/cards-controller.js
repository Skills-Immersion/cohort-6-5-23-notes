const cuid = require("cuid");
const { cards, decks } = require("../dataStore");
const logger = require("../logger");

// Option 2: mount the entire router (and modify the existing list function)
const list = (req, res) => {
  const { deckId } = req.params;
  if (deckId) {
    const cardsForDeck = cards.filter(c => c.deckId === deckId);
    res.json({ data: cardsForDeck })
  } else {
    res
      .json({ data: cards });
  }
};

// Option 1: write a separate route handler
const listCardsForDeck = (req, res, next) => {
  const { deckId } = req.params;
  const cardsForDeck = cards.filter(c => c.deckId === deckId);
  res.json({ data: cardsForDeck })
}

const create = (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({
      status: 400,
      message,
    });
  }

  const { front, back, deckId } = data;

  // Validate required fields are present
  const requiredFields = ["front", "back", "deckId"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      next({
        status: 400,
        message,
      });
    }
  }

  // Validate deck exists
  const deck = decks.find(d => d.id === deckId);
  if (!deck) {
    const message = `Deck id ${deckId} does not exist.`;
    return next({
      status: 400,
      message,
    });
  }

  // Create an ID
  const id = cuid();

  const card = {
    id,
    front,
    back,
    deckId,
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res
    .status(201)
    .json({ data: card });
};

const read = (req, res, next) => {
  const { cardId } = req.params;
  const card = cards.find(c => c.id === cardId);

  // make sure we found a card
  if (!card) {
    const message = `Card with id ${cardId} not found.`;
    return next({
      status: 404,
      message,
    });
  }

  res.json({ data: card });
};

const destroy = (req, res, next) => {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);

  if (cardIndex === -1) {
    const message = `Card id ${cardId} does not exist`;
    return next({
      status: 404,
      message,
    });
  }

  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
};

module.exports = {
  list,
  create,
  read,
  destroy,
  listCardsForDeck
};
