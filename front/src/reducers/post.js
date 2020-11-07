import {GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    GET_POST
} from '../actions/types';
import _ from 'lodash'; // added

const initialState = {
    pending: false,
    error: false,
    isdata: false,
    posts: [],
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        isdata: true,
        posts : action.payload
      };
    
    case GET_TODOS:
        return {
          ...state,
          isdata: true,
          posts : action.payload
        };
  
    case ADD_TODO: // added
        console.log(action)
        return {
          ...state,
        };
    case DELETE_TODO: // added
        return _.omit(state, action.payload);
  
    case EDIT_TODO: // added
      return {
        ...state,
      };

    default:
      return state;
  }
};