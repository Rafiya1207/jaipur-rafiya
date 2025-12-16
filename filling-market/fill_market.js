import { shuffleDeck } from "./makeShuffledDeck.js";

const deck = shuffleDeck();

export const fillMarket = (market, deck) => {
  if (deck.length < 1) {
    return market;
  }

  while (market.length < 5) {
    const good = deck.pop();
    if (good) {
      market.push(good);
    }
  }
  return market;
};

// console.log(deck.length);


// console.log(fillMarket(['ca', 'ca', 'ca'], deck));

// const main = () => {

//   const market = ["🐪", "🐪", "🐪"];
//   // const market = ["CA", "CA", "CA"];
//   while (true) {
//     fillMarket(market);
//     if (market.length < 5) {
//       console.log("GameOver not enough goods in the market")
//       break;
//     }
//     console.log(market);
//     const index = parseInt(prompt("Enter index of good to take"));
//     const howManyToTake = parseInt(prompt("how many"));
//     console.log(index)
//     const good = market.splice(index,howManyToTake)
//     console.log(good)

//   }
// }

// main();
