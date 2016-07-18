import * as types from '../constants/errors';

export const displayError = (error) => ({
  type: types.DISPLAY_ERROR,
  error
});

export const clearErrors = () => ({
  type: types.CLEAR_ERRORS
});
