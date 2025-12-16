// Making shuffeled deck for jaipur market

// const goodsCount = [
//   { item: "D", count: 6 },
//   { item: "G", count: 6 },
//   { item: "S", count: 6 },
//   { item: "C", count: 8 },
//   { item: "s", count: 8 },
//   { item: "L", count: 10 },
//   { item: "c", count: 8 },
// ];

const goodsCount = [
  { item: "♦️ ", count: 6 },
  { item: "⚱️ ", count: 6 },
  { item: "🪙 ", count: 6 },
  { item: "👕 ", count: 8 },
  { item: "🌶️ ", count: 8 },
  { item: "💼 ", count: 10 },
  { item: "🐪 ", count: 8 },
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
