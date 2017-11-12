import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';
import { beatReducer } from './beatReducer';
import { battleReducer } from './battleReducer';
import { battleListingReducer } from './battleListingReducer';
import { battleSubmissionReducer } from './battleSubmissionReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer,
  beatReducer,
  battleReducer,
  battleListingReducer,
  battleSubmissionReducer,
  form: formReducer
});

export default rootReducer;
