import { FETCH_CONTENDERS } from '../actions/contenderAction';

const initialState = {
  contenders: []
};

export const contenderReducer = (state = initialState, action) => {
  if (action.type === FETCH_CONTENDERS) {
    return Object.assign({}, state, {
      contenders: action.contenders.users
    });
  }
  return state;
};
