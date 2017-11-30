import {
  FETCH_CONTENDERS,
  FETCH_CONTENDER_BY_ID,
  FETCH_CHAMPIONS,
  FETCH_CURRENT_CONTENDER
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
    console.log(action);
    return Object.assign({}, state, {
      contender: action.contender
    });
  }
  return state;
};
