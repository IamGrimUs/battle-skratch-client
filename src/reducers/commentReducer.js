import { ADD_COMMENT } from '../actions/commentAction';

const initialState = {
  comment: [
    {
      author: '',
      comment: ''
      // videoId: ''
    }
  ]
};

export const commentReducer = (state = initialState, action) => {
  if (action.type === ADD_COMMENT) {
    console.log('state id: ', action.videoId);
    const videoId = action.videoId;
    console.log('author:', action.author);
    console.log('comment:', action.comment);

    const index = state.videos.findIndex(submission => {
      return submission.id === videoId;
    });

    state.videos[index].comments.push({
      author: action.author,
      comment: action.comment
    });

    return Object.assign({}, state, {
      comment: [...state.comment]
    });
  }
  return state;
};
