import { ADD_CONTENDER } from '../actions/contender.action';

const initialState = {
  Contenders: [
    {
      djName: 'Big Bird',
      socialIcons: [
        { social_fb: 'facebook' },
        { social_tw: 'twitter' },
        { social_yt: 'youtube' },
        { social_ig: 'instagram' }
      ],
      battlesEntered: '1',
      battlesWon: '2',
      totalPoints: '1'
    },
    {
      djName: 'Snuffleupagus',
      socialIcons: [
        { social_fb: 'facebook' },
        { social_tw: 'twitter' },
        { social_yt: 'youtube' },
        { social_ig: 'instagram' }
      ],
      battlesEntered: '2',
      battlesWon: '1',
      totalPoints: '1'
    }
  ]
};

export const contenderReducer = (state = initialState, action) => {
  if (action.type === ADD_CONTENDER) {
    return Object.assign({}, state, {
      Contenders: [
        ...state.contenders,
        {
          djName: action.djName,
          socialIcons: [
            action.social_fb,
            action.social_tw,
            action.social.yt,
            action.social.ig
          ]
        }
      ]
    });
  }
  return state;
};
