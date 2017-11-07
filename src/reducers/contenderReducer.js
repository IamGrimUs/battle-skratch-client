import { ADD_CONTENDER } from '../actions/contenderAction';

const initialState = {
  contenders: [
    {
      djName: 'Big Bird',
      img: 'http://via.placeholder.com/250x250',
      battlesEntered: '1',
      battlesWon: '100',
      totalPoints: '1'
    },
    {
      djName: 'Snuffleupagus',
      img: 'http://via.placeholder.com/250x250',
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
          djName: action.djName
        }
      ]
    });
  }
  return state;
};
