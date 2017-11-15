import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { contenderReducer } from './contenderReducer';
import { championReducer } from './championReducer';
import { beatReducer } from './beatReducer';
import { battleReducer } from './battleReducer';
import { videoReducer } from './videoReducer';

const rootReducer = combineReducers({
  contenderReducer,
  championReducer,
  beatReducer,
  battleReducer,
  videoReducer,
  form: formReducer
});

export default rootReducer;
