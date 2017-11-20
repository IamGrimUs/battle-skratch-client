import {
  FETCH_CONTENDERS,
  FETCH_CONTENDER_BY_ID,
  FETCH_CHAMPIONS
} from '../actions/contenderAction';

const initialState = {
  contenders: [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' }
  ],
  contender: {},
  champions: {}
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
  } else if (action.type === FETCH_CHAMPIONS) {
    return Object.assign({}, state, {
      champions: action.champions
    });
  }
  return state;
};
