import * as types from '../constants/settings';

export const toggleFunMode = () => ({
  type: types.TOGGLE_FUN_MODE
});

export const toggleMapMode = () => ({
  type: types.TOGGLE_MAP_MODE
});

export const toggleOfflineMode = () => ({
  type: types.TOGGLE_OFFLINE_MODE
});

export const setOfflineMode = (mode, message) => ({
  type: types.SET_OFFLINE_MODE,
  mode,
  message
});
