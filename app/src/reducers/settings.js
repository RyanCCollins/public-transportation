import {
  TOGGLE_FUN_MODE,
  TOGGLE_MAP_MODE,
  TOGGLE_OFFLINE_MODE,
  SET_OFFLINE_MODE
} from '../constants/settings';

const settings = (state = {
  funMode: false,
  mapMode: true,
  offlineMode: false,
  alertMessage: ''
}, action) => {
  switch (action.type) {
    case TOGGLE_MAP_MODE:
      return Object.assign({}, state, {
        mapMode: !state.mapMode
      });
    case TOGGLE_FUN_MODE:
      return Object.assign({}, state, {
        funMode: !state.funMode
      });
    case TOGGLE_OFFLINE_MODE:
      return Object.assign({}, state, {
        offlineMode: !state.offlineMode
      });
    case SET_OFFLINE_MODE:
      return Object.assign({}, state, {
        offlineMode: action.mode,
        alertMessage: action.message
      });
    default:
      return state;
  }
};

export default settings;
