import { ADD_CONTENDER } from '../actions/contenderAction';

const initialState = {
  contenders: [
    {
      djName: 'Big Bird',
      socialIcons: [
        { social_fb: '' },
        { social_tw: 'https://twitter.com/IamGrimus' },
        { social_yt: '' },
        { social_ig: '' }
      ],
      battlesEntered: '1',
      battlesWon: '100',
      totalPoints: '1'
    },
    {
      djName: 'Snuffleupagus',
      socialIcons: [
        { social_fb: '' },
        { social_tw: 'https://twitter.com/BillyBlanks' },
        { social_yt: '' },
        { social_ig: '' }
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
      contenders: [
        ...state.contenders,
        {
          djName: action.djName,
          socialIcons: [
            ...action.socialIcons
            // {social_fb: action.social_fb},
            // action.social_tw,
            // action.social.yt,
            // action.social.ig
          ]
        }
      ]
    });
  }
  return state;
};
