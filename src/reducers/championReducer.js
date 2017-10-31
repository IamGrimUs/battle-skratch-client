import { DISPLAY_CHAMPION } from '../actions/championAction';

const initialState = {
  champion: [
    {
      djName: 'Oscar the Grouch',
      battlesWon: '100',
      lastBattleWon: 'best :30s open skratch'
    },
    {
      djName: 'Snuffleupagus',
      battlesWon: 1,
      lastBattleWon: 'best :30s open skratch'
    }
  ]
};

export const championReducer = (state = initialState, action) => {
  if (action.type === DISPLAY_CHAMPION) {
    // return {
    //   ...state,
    //   champions: [
    //     {
    //       djName: action.djName,
    //       battlesWon: action.battlesWon,
    //       currentBattleWon: action.currentBattleWon
    //     }
    //   ]
    // };
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
