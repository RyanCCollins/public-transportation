import * as types from '../constants/help';

// stepForwards :: None -> {Action}
export const stepForwards = () => ({
  type: types.HANDLE_FORWARD
});

// stepBackwards :: None -> {Action}
export const stepBackwards = () => ({
  type: types.HANDLE_BACKWARD
});

// resetHelp :: None -> {Action}
export const resetHelp = () => ({
  type: types.HANDLE_HELP_RESET
});
