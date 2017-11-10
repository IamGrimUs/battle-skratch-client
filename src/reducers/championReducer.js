import { FETCH_CHAMPIONS } from '../actions/championAction';

const initialState = {
  champions: {}
};

export const championReducer = (state = initialState, action) => {
  if (action.type === FETCH_CHAMPIONS) {
    return Object.assign({}, state, {
      champions: action.champions
    });
  }
  return state;
};
