export const DISPLAY_CHAMPION = 'DISPLAY_CHAMPION';
export const displayChampion = (djName, battlesWon, lastBattleWon) => ({
  type: DISPLAY_CHAMPION,
  djName,
  battlesWon,
  lastBattleWon
});
