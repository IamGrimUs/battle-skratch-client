import { DISPLAY_CHAMPION } from '../actions/championAction';

const initialState = {
  champion: [
    {
      djName: 'Oscar the Grouch',
      grandChampion: 'grand champion',
      currentChampion: false,
      battlesWon: '100',
      lastBattleWon: 'best :30s open skratch'
    },
    {
      djName: 'Snuffleupagus',
      grandChampion: false,
      currentChampion: 'current champion',
      battlesWon: 1,
      lastBattleWon: 'best :30s open skratch'
    }
  ]
};

export const championReducer = (state = initialState, action) => {
  if (action.type === DISPLAY_CHAMPION) {
    return Object.assign({}, state, {
      champion: [
        ...state.champion,
        {
          djName: action.djName,
          battlesWon: action.battlesWon,
          currentBattleWon: action.currentBattleWon
        }
      ]
    });
  }
  return state;
};
