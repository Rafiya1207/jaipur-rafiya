const goodsCount = [
  { item: "d", count: 6 },
  { item: "g", count: 6 },
  { item: "s", count: 6 },
  { item: "cl", count: 8 },
  { item: "sp", count: 8 },
  { item: "l", count: 10 },
  { item: "ca", count: 8 },
];

export const makeDeck = () => {
  const deck = [];
  const totalGoodsCount = 52;
  while (deck.length < totalGoodsCount) {
    const good = goodsCount[Math.floor(Math.random() * 7)]
    if(good.count > 0) {
      deck.push(good.item)
      good.count--;
    }
  }
  return deck
}

export const shuffleDeck = () => {
  const deck = makeDeck();
  const shuffeledDeck = [];

  for (let index = 0; index < 52; index++) {
    const deckLength = deck.length;
    const randomIndex = Math.floor(Math.random() * deckLength);
    shuffeledDeck.push(deck.splice(randomIndex, 1)[0]);
  }
  return shuffeledDeck;
};
