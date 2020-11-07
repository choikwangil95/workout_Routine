import axios from 'axios';
import {GET_PROFILE,
    EDIT_PROFILE
} from './types';

// getProfile
export const getProfile = (id) => async (dispatch) => {
    console.log(id)
    const res = await axios.get(`http://127.0.0.1:8000/account/profile/${id}/`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  };

export const editProfile = (id, formValues) => async (dispatch) => {
    const res = await axios.patch(`http://127.0.0.1:8000/account/profile/${id}/`, formValues);
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data
    });
  };