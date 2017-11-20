import { FETCH_VIDEOS, ADD_COMMENT } from '../actions/videoAction';

const initialState = {
  videos: []
};

export const videoReducer = (state = initialState, action) => {
  if (action.type === FETCH_VIDEOS) {
    return handleFetchVideos(state, action);
  }
  if (action.type === ADD_COMMENT) {
    return handleAddComment(state, action);
  }
  return state;
};

const handleFetchVideos = (state, action) => {
  return Object.assign({}, state, {
    videos: action.videos
  });
};

const handleAddComment = (state, action) => {
  console.log('state id: ', action.videoId);
  const videoId = action.videoId;
  console.log('author:', action.author);
  console.log('comment:', action.comment);
  console.log('state => ', state);

  const index = state.videos.findIndex(submission => {
    return submission.id === videoId;
  });

  state.videos[index].comments.push({
    author: action.author,
    comment: action.comment
  });

  return Object.assign({}, state, {
    videos: [...state.videos]
  });
};
