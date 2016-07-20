import {
  HANDLE_BACKWARD,
  HANDLE_FORWARD
} from '../actions/help';

const help = (state = {
  stepIndex: 0
}, action) => {
  switch (action.type) {
    case HANDLE_FORWARD:
      return Object.assign({}, state, {
        stepIndex: 1
      });
    case HANDLE_BACKWARD:
      return Object.assign({}, state, {
        stepIndex: 0
      });
    default:
      return state;
  }
};

export default help;
