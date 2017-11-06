import { ADD_BATTLESUBMISSION } from '../actions/battleSubmissionAction';
import { ADD_COMMENT } from '../actions/commentAction';

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
      comments: [
        { id: 1, author: 'ralph macheo', comment: 'this video is fire!' }
      ]
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
        { id: 1, author: 'samonsite man', comment: 'snapper fizzle' },
        { id: 2, author: 'george', comment: 'fool, you pancaking' },
        {
          id: 3,
          author: 'big bird',
          comment: 'oh you aint herd about the bird?'
        }
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
          comments: []
        }
      ]
    });
  } else if (action.type === ADD_COMMENT) {
    console.log('state id: ', action.videoId);
    const videoId = action.videoId;
    console.log('author:', action.author);
    console.log('comment:', action.comment);

    const index = state.battleSubmission.findIndex(submission => {
      return submission.id === videoId;
    });

    state.battleSubmission[index].comments.push({
      author: action.author,
      comment: action.comment
    });

    return Object.assign({}, state, {
      battleSubmission: [...state.battleSubmission]
    });
  }
  return state;
};
