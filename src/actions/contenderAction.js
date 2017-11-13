// export const ADD_CONTENDER = 'ADD_CONTENDER';
// export const addContender = (name, img, battlesEntered, battlesWon) => ({
//   type: ADD_CONTENDER,
//   name,
//   img,
//   battlesEntered,
//   battlesWon
// });

export const FETCH_CONTENDERS = 'FETCH_CONTENDERS';
export const fetchContenders = contenders => ({
  type: FETCH_CONTENDERS,
  contenders
});

export const FETCH_CONTENDER_BY_ID = 'FETCH_CONTENDER_BY_ID';
export const fetchContenderById = contender => ({
  type: FETCH_CONTENDER_BY_ID,
  contender
});
