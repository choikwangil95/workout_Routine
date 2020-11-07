import axios from 'axios';
import {GET_BACK,
    EDIT_BACK,
    TRUE_MON,
    FALSE_MON,
    TRUE_TUE,
    FALSE_TUE,
    TRUE_WED,
    FALSE_WED,
    TRUE_THU,
    FALSE_THU,
    TRUE_FRI,
    FALSE_FRI,
    TRUE_SAT,
    FALSE_SAT,
    TRUE_SUN,
    FALSE_SUN,
    TRUE_DEAD,
    FALSE_DEAD,
    TRUE_PULLUP,
    FALSE_PULLUP,
    TRUE_D_ROW,
    FALSE_D_ROW,
    TRUE_B_ROW,
    FALSE_B_ROW,
    TRUE_O_A_D_ROW,
    FALSE_O_A_D_ROW,
    TRUE_LACKPULL,
    FALSE_LACKPULL,
    TRUE_LATPULL_DOWN,
    FALSE_LATPULL_DOWN,
    TRUE_SEATED_CABLE_ROW,
    FALSE_SEATED_CABLE_ROW,
    EDIT_DAY,
    GET_DRIPS,
} from './types';

// getProfile
export const getBack = (id) => async (dispatch) => {
    const res = await axios.get(`http://127.0.0.1:8000/routine/back/${id-2}/`);
    dispatch({
      type: GET_BACK,
      payload: res.data
    });
  };

export const getDrips = () => async (dispatch) => {
    const res = await axios.get(`http://127.0.0.1:8000/routine/drip/`);
    console.log(res);
    dispatch({
      type: GET_DRIPS,
      payload: res.data
    });
  };
export const editBack = (id, formValues) => async (dispatch) => {
    const res = await axios.patch(`http://127.0.0.1:8000/routine/back/${id-2}/`, formValues);
    dispatch({
      type: EDIT_BACK,
      payload: res.data
    });
  };

// 여기부터 요일토글

export const toggleMon = (mon) => dispatch => {
  if (mon === false) {
    dispatch({
      type : TRUE_MON
    });  
  }
  else if (mon === true) {
    dispatch({
      type : FALSE_MON
    });  
  }
};

export const toggleTue = (tue) => dispatch => {
  if (tue === false) {
    dispatch({
      type : TRUE_TUE
    });  
  }
  else if (tue === true) {
    dispatch({
      type : FALSE_TUE
    });  
  }
};

export const toggleWed = (wed) => dispatch => {
  if (wed === false) {
    dispatch({
      type : TRUE_WED
    });  
  }
  else if (wed === true) {
    dispatch({
      type : FALSE_WED
    });  
  }
};

export const toggleThu = (thu) => dispatch => {
  if (thu === false) {
    dispatch({
      type : TRUE_THU
    });  
  }
  else if (thu === true) {
    dispatch({
      type : FALSE_THU
    });  
  }
};

export const toggleFri = (fri) => dispatch => {
  if (fri === false) {
    dispatch({
      type : TRUE_FRI
    });  
  }
  else if (fri === true) {
    dispatch({
      type : FALSE_FRI
    });  
  }
};

export const toggleSat = (sat) => dispatch => {
  if (sat === false) {
    dispatch({
      type : TRUE_SAT
    });  
  }
  else if (sat === true) {
    dispatch({
      type : FALSE_SAT
    });  
  }
};

export const toggleSun = (sun) => dispatch => {
  if (sun === false) {
    dispatch({
      type : TRUE_SUN
    });  
  }
  else if (sun === true) {
    dispatch({
      type : FALSE_SUN
    });  
  }
};

// 여기부터 요일저장
export const editDay = (id, day) => async (dispatch) => {
  const res = await axios.patch(`http://127.0.0.1:8000/routine/back/${id-2}/`, day);
  dispatch({
      type: EDIT_DAY,
      payload: res.data
    });
};

// 여기부터 루틴

export const toggleDead = (dead) => dispatch => {
  if (dead === false) {
    dispatch({
      type : TRUE_DEAD
    });  
  }
  else if (dead === true) {
    dispatch({
      type : FALSE_DEAD
    });  
  }
};

export const togglePullup = (pullup) => dispatch => {
  if (pullup === false) {
    dispatch({
      type : TRUE_PULLUP
    });  
  }
  else if (pullup === true) {
    dispatch({
      type : FALSE_PULLUP
    });  
  }
};

export const toggle_D_row = (row) => dispatch => {
  if (row === false) {
    dispatch({
      type : TRUE_D_ROW
    });  
  }
  else if (row === true) {
    dispatch({
      type : FALSE_D_ROW
    });  
  }
};

export const toggle_B_row = (row) => dispatch => {
  if (row === false) {
    dispatch({
      type : TRUE_B_ROW
    });  
  }
  else if (row === true) {
    dispatch({
      type : FALSE_B_ROW
    });  
  }
};

export const toggle_O_a_d_row = (row) => dispatch => {
  if (row === false) {
    dispatch({
      type : TRUE_O_A_D_ROW
    });  
  }
  else if (row === true) {
    dispatch({
      type : FALSE_O_A_D_ROW
    });  
  }
};

export const toggle_Lackpull = (pull) => dispatch => {
  if (pull === false) {
    dispatch({
      type : TRUE_LACKPULL
    });  
  }
  else if (pull === true) {
    dispatch({
      type : FALSE_LACKPULL
    });  
  }
};

export const toggle_Latpull_down = (row) => dispatch => {
  if (row === false) {
    dispatch({
      type : TRUE_LATPULL_DOWN
    });  
  }
  else if (row === true) {
    dispatch({
      type : FALSE_LATPULL_DOWN
    });  
  }
};

export const toggle_Seated_cable_row = (row) => dispatch => {
  if (row === false) {
    dispatch({
      type : TRUE_SEATED_CABLE_ROW
    });  
  }
  else if (row === true) {
    dispatch({
      type : FALSE_SEATED_CABLE_ROW
    });  
  }
};
