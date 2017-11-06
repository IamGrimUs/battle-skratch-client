export const ADD_BATTLESUBMISSION = 'ADD_BATTLESUBMISSION';

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
