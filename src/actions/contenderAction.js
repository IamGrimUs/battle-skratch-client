export const FETCH_CONTENDERS = 'FETCH_CONTENDERS';
export const FETCH_CONTENDER_BY_ID = 'FETCH_CONTENDER_BY_ID';
export const FETCH_CHAMPIONS = 'FETCH_CHAMPIONS';

export const fetchContenders = contenders => ({
  type: FETCH_CONTENDERS,
  contenders
});

export const fetchContenderById = contender => ({
  type: FETCH_CONTENDER_BY_ID,
  contender
});

export const fetchChampions = champions => ({
  type: FETCH_CHAMPIONS,
  champions
});