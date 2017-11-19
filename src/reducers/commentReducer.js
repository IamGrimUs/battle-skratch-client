import { ADD_COMMENT } from '../actions/commentAction';

const initialState = {
  comment: {
    author: '',
    comment: '',
    videoId: ''
  }
};

export const commentReducer = (state = initialState, action) => {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comment: action.comment
    });
  }
  return state;
};
