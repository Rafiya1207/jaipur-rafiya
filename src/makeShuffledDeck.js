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

// const freqTable = (list) => 
//   list.reduce((res, x) => {
//     res[x] = res[x] ? res[x] + 1 : 1;
//     return res;
//   }, {});

// export const makeDeck = () => { // unshuffled
//   const goods = [];
//   for (const good of goodsCount) {
//     for (let index = 0; index < good.count; index++) {
//       goods.push(good.item)
//     }
//   }
//   return goods
// }
// export const makeDeck = () => {   // this makes an array of arrays 
//   const goods = [];
//   for (const good of goodsCount) {
//     console.log(good)
//     goods.push(good.item.repeat(good.count).split(" "))
//   }
//   return goods
// }

// export const makeDeck = () => {
//   const goods = [];
//   goods.push("♦️ ".repeat(6).split(" "));
//   goods.push("⚱️ ".repeat(6).split(" "));
//   goods.push("🪙 ".repeat(6).split(" "));
//   goods.push("👕 ".repeat(8).split(" "));
//   goods.push("🌶️ ".repeat(8).split(" "));
//   goods.push("💼 ".repeat(10).split(" "));
//   goods.push("🐪 ".repeat(8).split(" "));
//   const deck = goods.flatMap((x) => x);
//   return deck;
// };
// export const makeDeck = () => {
//   const goods = [];
//   goods.push("DA".repeat(6).match(/DA/g));
//   goods.push("GO".repeat(6).match(/GO/g));
//   goods.push("SI".repeat(6).match(/SI/g));
//   goods.push("CL".repeat(8).match(/CL/g));
//   goods.push("SP".repeat(8).match(/SP/g));
//   goods.push("LE".repeat(10).match(/LE/g));
//   goods.push("CA".repeat(8).match(/CA/g));
//   const deck = goods.flatMap((x) => x);
//   return deck;
// };

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
