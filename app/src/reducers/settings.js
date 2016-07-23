import {
  TOGGLE_FUN_MODE,
  TOGGLE_MAP
} from '../constants/settings';

const settings = (state = {
  funMode: false,
  mapMode: true
}, action) => {
  switch (action.type) {
    case TOGGLE_MAP:
      return Object.assign({}, state, {
        mapMode: !state.mapMode
      });
    case TOGGLE_FUN_MODE:
      return Object.assign({}, state, {
        funMode: !state.funMode
      });
    default:
      return state;
  }
};

export default settings;
