export const FETCH_CONTENDERS = 'FETCH_CONTENDERS';
export const FETCH_CONTENDER_BY_ID = 'FETCH_CONTENDER_BY_ID';
export const FETCH_CHAMPIONS = 'FETCH_CHAMPIONS';
export const FETCH_CURRENT_CONTENDER = 'FETCH_CURRENT_CONTENDER';
export const LOGIN_ERROR_MESSAGE = 'LOGIN_ERROR_MESSAGE';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

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

export const fetchCurrentContender = contender => ({
  type: FETCH_CURRENT_CONTENDER,
  contender
});

export const loginErrorMessage = errorMessage => ({
  type: LOGIN_ERROR_MESSAGE,
  errorMessage
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});
