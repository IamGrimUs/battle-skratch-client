import { ADD_BATTLELISTING } from '../actions/battleListingAction';

const initialState = {
  battles: []
};

export const battleListingReducer = (state = initialState, action) => {
  if (action.type === ADD_BATTLELISTING) {
    return Object.assign({}, state, {
      battles: [
        ...state.battles,
        {
          startDate: action.startDate,
          endDate: action.endDate,
          beatId: action.beatId,
          videoIds: action.videoIds,
          participants: action.participants,
          champion: action.champion,
          battleTypeId: action.battleTypeId
        }
      ]
    });
  }
  return state;
};
