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
    TOGGLE_TUE,
    TOGGLE_WED,
    TOGGLE_THU,
    TOGGLE_FRI,
    TOGGLE_SAT,
    TOGGLE_SUN,
    EDIT_DAY,
    GET_DRIPS,
} from '../actions/types';

const initialState = {
    back: [],
    mon : false,
    tue : false,
    wed : false,
    thu : false,
    fri : false,
    sat : false,
    sun : false,
    deadlift : false,
    pullup : false,
    d_row : false,
    b_row : false,
    o_a_d_row : false,
    lackpull : false,
    latpull_down : false,
    seated_cable_row : false,
    drip:[],
  }

  export default (state = initialState, action) => {
    switch (action.type) {

      case GET_DRIPS:
        console.log(action.payload)
        return {
          ...state,
          drip : action.payload
        };

      case GET_BACK:
        return {
          ...state,
          back : action.payload
        };

      case EDIT_BACK: // added
        return {
          ...state,
        };

      // 여기부터 요일
      case TRUE_MON: // added
        return {
          ...state,
          mon : true
        }
  
      case FALSE_MON:
        return {
          ...state,
          mon : false
        }

      case TRUE_TUE: // added
        return {
          ...state,
          tue : true
        }
  
      case FALSE_TUE:
        return {
          ...state,
          tue : false
        }

        case TRUE_WED: // added
        return {
          ...state,
          wed : true
        }
  
      case FALSE_WED:
        return {
          ...state,
          wed : false
        }

        case TRUE_THU: // added
        return {
          ...state,
          thu : true
        }
  
      case FALSE_THU:
        return {
          ...state,
          thu : false
        }

        case TRUE_FRI: // added
        return {
          ...state,
          fri : true
        }
  
      case FALSE_FRI:
        return {
          ...state,
          fri : false
        }

        case TRUE_SAT: // added
        return {
          ...state,
          sat : true
        }
  
      case FALSE_SAT:
        return {
          ...state,
          sat : false
        }

        case TRUE_SUN: // added
        return {
          ...state,
          sun : true
        }
  
      case FALSE_SUN:
        return {
          ...state,
          sun : false
        }

      // 여기부터 루틴
      case TRUE_DEAD: // added
        return {
          ...state,
          deadlift : true
      }

      case FALSE_DEAD:
        return {
          ...state,
          deadlift : false
        }
        
      case TRUE_PULLUP: // added
        return {
          ...state,
          pullup : true
      }

      case FALSE_PULLUP:
        return {
          ...state,
          pullup : false
        }

      case TRUE_D_ROW: // added
        return {
          ...state,
          d_row : true
      }

      case FALSE_D_ROW:
        return {
          ...state,
          d_row : false
        }

      case TRUE_B_ROW: // added
        return {
          ...state,
          b_row : true
      }

      case FALSE_B_ROW:
        return {
          ...state,
          b_row : false
        }

      case TRUE_O_A_D_ROW: // added
        return {
          ...state,
          o_a_d_row : true
      }

      case FALSE_O_A_D_ROW:
        return {
          ...state,
          o_a_d_row : false
        }
        case TRUE_LACKPULL: // added
        return {
          ...state,
          lackpull : true
      }

      case FALSE_LACKPULL:
        return {
          ...state,
          lackpull : false
        }
        case TRUE_LATPULL_DOWN: // added
        return {
          ...state,
          latpull_down : true
      }

      case FALSE_LATPULL_DOWN:
        return {
          ...state,
          latpull_down : false
        }
        case TRUE_SEATED_CABLE_ROW: // added
        return {
          ...state,
          seated_cable_row : true
      }

      case FALSE_SEATED_CABLE_ROW:
        return {
          ...state,
          seated_cable_row : false
        }

      ///////////////////////////
      case TOGGLE_TUE: // added
      const tue = initialState.tue

      if (tue == false) {
        tue = true;
      } else {
        tue = false;
      }
        return {
          ...state,
        };

      case TOGGLE_WED:
        const wed = initialState.wed

          if (wed == false) {
            wed = true;
          } else {
            wed = false;
          }

        return {
          ...state,
        };

        case TOGGLE_THU:
          const thu = initialState.thu

            if (thu == false) {
              thu = true;
            } else {
              thu = false;
            }

        return {
          ...state,
        };

        case TOGGLE_FRI:
          const fri = initialState.fri

            if (fri == false) {
              fri = true;
            } else {
              fri = false;
            }

        return {
          ...state,
        };

        case TOGGLE_SAT:
          const sat = initialState.sat

            if (sat == false) {
              sat = true;
            } else {
              sat = false;
            }

        return {
          ...state,
        };

        case TOGGLE_SUN: // added
        const sun = initialState.sun

        if (sun == false) {
          sun = true;
        } else {
          sun = false;
        }

        return {
          ...state,
        };

      default:
        return state;
    }
  };