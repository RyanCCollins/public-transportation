import {
  HANDLE_BACKWARD,
  HANDLE_FORWARD
} from '../constants/help';

const stepIndex = (state = 1, action) => {
  switch (action.type) {
    case HANDLE_FORWARD:
      return state + 1;
    case HANDLE_BACKWARD:
      return state - 1;
    default:
      return state;
  }
};

const help = (state = {
  stepIndex: 1
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
