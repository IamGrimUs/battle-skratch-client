import { combineReducers } from 'redux';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';
import { beatReducer } from './beatReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer,
  beatReducer
});

export default rootReducer;
