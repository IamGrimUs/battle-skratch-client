import { combineReducers } from 'redux';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';
import { beatReducer } from './beatReducer';
import { battleListingReducer } from './battleListingReducer';
import { battleSubmissionReducer } from './battleSubmissionReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer,
  beatReducer,
  battleListingReducer,
  battleSubmissionReducer
});

export default rootReducer;
