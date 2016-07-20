import {
  DISPLAY_ERROR,
  CLEAR_ERRORS
} from '../constants/errors';
const errors = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return [
        ...state,
        action.error
      ];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errors;
