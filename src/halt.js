const isDeckEmpty = (deck) => !deck.length;

const are3CoinColorsFinished = (goods) => {
  const emptyCoins = Object.values(goods).reduce(
    (count, { coins }) => (!coins.length) ? ++count : count,
    0,
  );

  return emptyCoins >= 3;
};

const assignBonusCamel = (players) => {
  const playerWithMoreCamels = players[0].herd.length > players[1].herd.length
    ? 0
    : 1;

  players[playerWithMoreCamels].points += 5;
};
