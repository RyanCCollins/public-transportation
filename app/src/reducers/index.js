import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as types from '../constants/index';
import initialState from '../store/initialState';

import schedule from './schedule';
import errors from './errors';
import stations from './stations';
import navbar from './navbar';
import help from './help';
import settings from './settings';

const appReducer = combineReducers({
  schedule,
  settings,
  help,
  navbar,
  stations,
  errors,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

/**
 * @function rootReducer
 * @description A reducer for global settings / state
 * @param state - the current state
 * @param action - the action to be applied
 * @return - Reducer - the root reducer
 */
const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === types.RESET) {
    newState = initialState;
  }
  return appReducer(newState, action);
};

export default rootReducer;
