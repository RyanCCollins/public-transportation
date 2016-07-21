import {
  HANDLE_BACKWARD,
  HANDLE_FORWARD
} from '../constants/help';

const stepIndex = (state = 0, action) => {
  switch (action.type) {
    case HANDLE_FORWARD:
      return 2;
    case HANDLE_BACKWARD:
      return state - 1;
    default:
      return state;
  }
};

const help = (state = {
  stepIndex: 0
}, action) => {
  switch (action.type) {
    case HANDLE_FORWARD:
      return Object.assign({}, state, {
        stepIndex: stepIndex(state.stepIndex, action)
      });
    case HANDLE_BACKWARD:
      return Object.assign({}, state, {
        stepIndex: stepIndex(state.stepIndex, action)
      });
    default:
      return state;
  }
};

export default help;
