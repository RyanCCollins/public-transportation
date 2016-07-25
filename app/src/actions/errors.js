import * as types from '../constants/errors';

// displayError :: Error -> Action
export const displayError = (error) => ({
  type: types.DISPLAY_ERROR,
  error
});

// clearErrors :: None -> Action
export const clearErrors = () => ({
  type: types.CLEAR_ERRORS
});
