import {
  LOAD_ROUTES_SUCCESS,
  LOAD_ROUTES_INITIATION,
  SELECT_ROUTE,
  LOAD_ROUTES_ERROR,
  CLEAR_ROUTES_ERRORS,
  CLEAR_ROUTE
} from '../constants/routes';
const routes = (state = {
  items: [],
  selectedRoute: null,
  errors: [],
  isLoading: false
}, action) => {
  switch (action.type) {
    case LOAD_ROUTES_INITIATION:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOAD_ROUTES_SUCCESS:
      return Object.assign({}, state, {
        items: action.routes,
        isLoading: false
      });
    case SELECT_ROUTE:
      return Object.assign({}, state, {
        selectedRoute: action.selectedRoute
      });
    case LOAD_ROUTES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [
          ...state.errors,
          action.error
        ]
      });
    case CLEAR_ROUTE:
      return Object.assign({}, state, {
        selectedRoute: null
      });
    case CLEAR_ROUTES_ERRORS:
      return Object.assign({}, state, {
        errors: []
      });
    default:
      return state;
  }
};

export default routes;
