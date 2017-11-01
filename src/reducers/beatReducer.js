import { ADD_BEAT } from '../actions/beatAction';

const initialState = {
  beat: [
    {
      title: 'Brutal Charles XXX',
      producer: 'easy shaklin',
      duration: 30,
      link: 'https://soundcloud.com/grimus-2/brutal-charles-xxx'
    }
  ]
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
