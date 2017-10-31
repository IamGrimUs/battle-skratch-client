import { combineReducers } from 'redux';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer
});

export default rootReducer;
