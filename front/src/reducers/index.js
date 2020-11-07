import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import post from './post';
import user from './user';
import profile from './profile';
import routine from './routine';
import { LOGOUT_SUCCESS } from '../actions/types'; // added

const appReducer = combineReducers({
  form: formReducer,
  post,
  user,
  profile,
  routine
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;