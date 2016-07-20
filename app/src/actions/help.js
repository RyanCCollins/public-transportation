import * as types from '../constants/help';

export const stepForwards = (nextStepIndex) => ({
  type: types.HANDLE_FORWARD,
  nextStepIndex
});

export const stepBackwards = (previousStepIndex) => ({
  type: types.HANDLE_BACKWARD,
  previousStepIndex
});
