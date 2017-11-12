export const ADD_BATTLELISTING = 'ADD_BATTLELISTING';
export const ADD_BATTLESUBMISSION = 'ADD_BATTLESUBMISSION';
export const FETCH_BATTLES = 'FETCH_BATTLES';
export const FETCH_CURRENT_BATTLE = 'FETCH_CURRENT_BATTLE';

// export const addBattlelisting = (
//   discription,
//   battleNumber,
//   duration,
//   startDate,
//   endDate,
//   currentBattle
// ) => ({
//   type: ADD_BATTLELISTING,
//   discription,
//   battleNumber,
//   duration,
//   startDate,
//   endDate,
//   currentBattle
// });

export const addBattleSubmission = (
  videoLink,
  videoImgLink,
  title,
  djName,
  voteUp,
  voteDown,
  comments
) => ({
  type: ADD_BATTLESUBMISSION,
  videoLink,
  videoImgLink,
  title,
  djName,
  voteUp,
  voteDown,
  comments
});

export const fetchBattles = battles => ({
  type: FETCH_BATTLES,
  battles
});

export const fetchCurrentBattle = currentBattle => ({
  type: FETCH_CURRENT_BATTLE,
  currentBattle
});
