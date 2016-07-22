import { TOGGLE_FUN_MODE } from '../constants/settings';

const settings = (state = {
  funMode: false
}, action) => {
  switch (action.type) {
    case TOGGLE_FUN_MODE:
      return Object.assign({}, state, {
        funMode: !state.funMode
      });
    default:
      return state;
  }
};

export default settings;
