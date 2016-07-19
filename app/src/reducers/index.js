import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import schedule from './schedule';
import errors from './errors';
import stops from './stops';
import routes from './routes';
import navbar from './navbar';

const rootReducer = combineReducers({
  schedule,
  navbar,
  routes,
  stops,
  errors,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
