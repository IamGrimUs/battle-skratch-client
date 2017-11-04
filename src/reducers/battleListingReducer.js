import { ADD_BATTLELISTING } from '../actions/battleListingAction';

const initialState = {
  battles: [
    {
      id: 1,
      videoIds: [1],
      currentBattle: true,
      battleNumber: 2, // TODO: Get rid of this, use array index after sorted by date
      discription: 'stabs & tranforms only',
      duration: 30,
      startDate: '11.02.17',
      endDate: '12.01.17'
    },
    {
      id: 2,
      videoIds: [2],
      currentBattle: false,
      battleNumber: 1,
      discription: 'open skratch',
      duration: 30,
      startDate: '10.02.17',
      endDate: '11.01.17'
    }
  ]
};

export const battleListingReducer = (state = initialState, action) => {
  if (action.type === ADD_BATTLELISTING) {
    return Object.assign({}, state, {
      battles: [
        ...state.battles,
        {
          currentBattle: action.currentBattle,
          battleNumber: action.battleNumber,
          discription: action.discription,
          duration: action.duration,
          endDate: action.endDate
        }
      ]
    });
  }
  return state;
};
