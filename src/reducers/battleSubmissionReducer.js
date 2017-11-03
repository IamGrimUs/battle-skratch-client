import { ADD_BATTLESUBMISSION } from '../actions/battleSubmissionAction';

const initialState = {
  battleSubmission: [
    {
      id: 1,
      videoLink:
        'https://www.youtube.com/embed/YHEJuTo_T0w?rel=0&amp;showinfo=0',
      videoImgLink: '../img/video-img.jpg',
      title: 'battle submission',
      djName: 'snuffleupagus',
      voteUp: 10,
      voteDown: 3,
      comments: [{ author: 'ralph macheo', comment: 'this video is fire!' }]
    },
    {
      id: 2,
      videoLink:
        'https://www.youtube.com/embed/YHEJuTo_T0w?rel=0&amp;showinfo=0',
      videoImgLink: '../img/video-img.jpg',
      title: 'the dope stuff',
      djName: 'prad bitt',
      voteUp: 39,
      voteDown: 0,
      comments: [
        { author: 'samonsite man', comment: 'snapper fizzle' },
        { author: 'george', comment: 'fool, you pancaking' },
        { author: 'big bird', comment: 'oh you aint herd about the bird?' }
      ]
    }
  ]
};

export const battleSubmissionReducer = (state = initialState, action) => {
  if (action.type === ADD_BATTLESUBMISSION) {
    return Object.assign({}, state, {
      battleSubmission: [
        ...state.battleSubmission,
        {
          videoLink: action.videoLink,
          videoImgLink: action.videoImgLink,
          title: action.title,
          djName: action.djName,
          voteUp: action.voteUp,
          voteDown: action.voteDown,
          comments: action.comments
        }
      ]
    });
  }
  return state;
};
