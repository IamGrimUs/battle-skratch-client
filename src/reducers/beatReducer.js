import { ADD_BEAT } from '../actions/beatAction';

const initialState = {
  beat: {}
};

export const beatReducer = (state = initialState, action) => {
  if (action.type === ADD_BEAT) {
    return Object.assign({}, state, {
      beat: [
        ...state.beat,
        {
          title: action.title,
          producer: action.producer,
          duration: action.duration,
          link: action.link
        }
      ]
    });
  }
  return state;
};
