import axios from 'axios';
import {GET_TODOS,
    GET_POST,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
} from './types';

import { tokenConfig } from './user'; // added
import { reset } from 'redux-form'; // added
import history from '../components/common/history'; // added

// getPost
export const getPost = (id) => async (dispatch, getState) => {
  console.log(id)
  const res = await axios.get(`http://127.0.0.1:8000/posts/${id}/`, tokenConfig(getState));
  dispatch({
    type: GET_POST,
    payload: res.data
  });
};

// GET TODOS
export const getTodos = () => async (dispatch, getState) => {
  const res = await axios.get('http://127.0.0.1:8000/posts/', tokenConfig(getState));
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const addTodo = formValues => async (dispatch, getState) => {
    const res = await axios.post('http://127.0.0.1:8000/posts/', { ...formValues }, tokenConfig(getState));
    dispatch({
      type: ADD_TODO,
      payload: res.data
    });
    history.push('/');
    dispatch(reset('todoForm'));
  };

export const deleteTodo = id => async (dispatch, getState) => { // added
    await axios.delete(`http://127.0.0.1:8000/posts/${id}/`, tokenConfig(getState));
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
    history.push('/');
}

export const editTodo = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.patch(`http://127.0.0.1:8000/posts/${id}/`, formValues, tokenConfig(getState));
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/');
};