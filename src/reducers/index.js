import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';
import { beatReducer } from './beatReducer';
import { battleReducer } from './battleReducer';
import { battleListingReducer } from './battleListingReducer';
import { battleSubmissionReducer } from './battleSubmissionReducer';
import { videoReducer } from './videoReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer,
  beatReducer,
  battleReducer,
  battleListingReducer,
  battleSubmissionReducer,
  videoReducer,
  form: formReducer
});

export default rootReducer;
