// export const DISPLAY_CHAMPION = 'DISPLAY_CHAMPION';
// export const displayChampion = (djName, battlesWon, lastBattleWon) => ({
//   type: DISPLAY_CHAMPION,
//   djName,
//   battlesWon,
//   lastBattleWon
// });

export const FETCH_CHAMPIONS = 'FETCH_CHAMPIONS';
export const fetchChampions = champions => ({
  type: FETCH_CHAMPIONS,
  champions
});
