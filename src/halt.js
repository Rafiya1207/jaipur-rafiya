const isDeckEmpty = (deck) => !deck.length;

const are3CoinColorsFinished = (goods) => {
  const emptyCoins = Object.values(goods).reduce(
    (count, { coins }) => (!coins.length) ? ++count : count,
    0,
  );

  return emptyCoins >= 3;
};
