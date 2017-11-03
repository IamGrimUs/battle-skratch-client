export const ADD_BATTLELISTING = 'ADD_BATTLELISTING';
export const addBattlelisting = (
  discription,
  battleNumber,
  duration,
  startDate,
  endDate,
  currentBattle
) => ({
  type: ADD_BATTLELISTING,
  discription,
  battleNumber,
  duration,
  startDate,
  endDate,
  currentBattle
});
