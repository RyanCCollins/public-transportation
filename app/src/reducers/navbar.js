import {
  TOGGLE_NAV
} from '../constants/navbar';

const navbar = (state = {
  isOpen: false
}, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    default:
      return state;
  }
};

export default navbar;
