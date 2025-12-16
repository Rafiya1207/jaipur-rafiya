import { shuffleDeck } from "./makeShuffledDeck.js";

// const market = ["CA", "CA", "CA"];
const deck = shuffleDeck();

const fillMarket = (market) => {
  if(deck.length < 1) {
    return market;
  }

  while (market.length < 5) {
    const good = deck.pop()
    if (good){
      market.push(good)
    }
  }
  return market;
}

const main = () => {

  const market = ["🐪", "🐪", "🐪"];
  // const market = ["CA", "CA", "CA"];
  while (true) {
    fillMarket(market);
    if (market.length < 5) {
      console.log("GameOver not enough goods in the market")
      break;
    }
    console.log(market);
    const index = parseInt(prompt("Enter index of good to take"));
    const howManyToTake = parseInt(prompt("how many"));
    console.log(index)
    const good = market.splice(index,howManyToTake)
    console.log(good)

    

  }
}

main();