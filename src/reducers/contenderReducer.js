import {
  FETCH_CONTENDERS,
  FETCH_CONTENDER_BY_ID
} from '../actions/contenderAction';

const initialState = {
  contenders: [{ name: '' }],
  contender: {}
};

export const contenderReducer = (state = initialState, action) => {
  if (action.type === FETCH_CONTENDERS) {
    return Object.assign({}, state, {
      contenders: action.contenders.users
    });
  } else if (action.type === FETCH_CONTENDER_BY_ID) {
    return Object.assign({}, state, {
      contender: action.contender
    });
  }
  return state;
};
