import {GET_PROFILE,
    EDIT_PROFILE
} from '../actions/types';

const initialState = {
    profile: [],
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_PROFILE:
        return {
          ...state,
          profile : action.payload
        };
      case EDIT_PROFILE: // added
        return {
          ...state,
        };
  
      default:
        return state;
    }
  };