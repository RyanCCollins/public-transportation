import * as types from '../constants/help';

export const stepForwards = () => ({
  type: types.HANDLE_FORWARD
});

export const stepBackwards = () => ({
  type: types.HANDLE_BACKWARD
});
