import {
  FETCH_CONTENDERS,
  FETCH_CONTENDER_BY_ID,
  FETCH_CHAMPIONS,
  FETCH_CURRENT_CONTENDER,
  LOGIN_ERROR_MESSAGE,
  LOGOUT_CURRENT_USER
} from '../actions/contenderAction';

const initialState = {
  contenders: [{ name: '' }],
  contender: {},
  champions: {}
};

export const contenderReducer = (state = initialState, action) => {
  if (action.type === FETCH_CONTENDERS) {
    return Object.assign({}, state, {
      contenders: action.contenders.users
    });
  }
  if (action.type === FETCH_CONTENDER_BY_ID) {
    return Object.assign({}, state, {
      contender: action.contender
    });
  }
  if (action.type === FETCH_CHAMPIONS) {
    return Object.assign({}, state, {
      champions: action.champions
    });
  }
  if (action.type === FETCH_CURRENT_CONTENDER) {
    return Object.assign({}, state, {
      contender: action.contender,
      errorMessage: undefined
    });
  }
  if (action.type === LOGIN_ERROR_MESSAGE) {
    return Object.assign({}, state, {
      errorMessage: action.errorMessage
    });
  }
  if (action.type === LOGOUT_CURRENT_USER) {
    return Object.assign({}, state, {
      contender: {}
    });
  }
  return state;
};
