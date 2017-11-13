import { FETCH_VIDEOS } from '../actions/videoAction';

const initialState = {
  videos: []
};

export const videoReducer = (state = initialState, action) => {
  if (action.type === FETCH_VIDEOS) {
    return Object.assign({}, state, {
      videos: action.videos.video
    });
  }
  return state;
};
