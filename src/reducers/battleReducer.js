import { FETCH_BATTLES, FETCH_CURRENT_BATTLE } from '../actions/battleAction';

const initialState = {
  battles: {
    battlesList: [],
    beats: [],
    battleTypes: []
  },
  currentBattle: {
    id: '',
    battleTypeId: {},
    beatId: {},
    champion: '',
    endDate: '',
    startDate: '',
    videoIds: []
  }
};

export const battleReducer = (state = initialState, action) => {
  if (action.type === FETCH_BATTLES) {
    return Object.assign({}, state, {
      battles: action.battles
    });
  } else if (action.type === FETCH_CURRENT_BATTLE) {
    return Object.assign({}, state, {
      currentBattle: action.currentBattle.currentBattle
    });
  }
  return state;
};
