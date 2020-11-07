import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS, // added
    REGISTER_FAIL, // added
    GET_USERS
  } from '../actions/types';
  
  const initialState = {
    isLoading: false,
    isAuthenticated: null,
    user: null,
    users : null,
    token: localStorage.getItem('token')
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS : 
        return {
          ...state,
          users : action.payload
        };

      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };

      case USER_LOADED:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload
        };

      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          ...action.payload
        };
      case AUTH_ERROR:

      case LOGIN_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null
        };

      case LOGOUT_SUCCESS: // added
        localStorage.removeItem('token');
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null
        };

      case REGISTER_SUCCESS: // added
      
      case REGISTER_FAIL: // added

      default:
        return state;
    }
  }