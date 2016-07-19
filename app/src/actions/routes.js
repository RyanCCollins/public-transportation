import * as types from '../constants/routes';
const apiKey = 'dce33f45612348bb8c4c247f8413bb7f';
const routeUrl = 'https://api.wmata.com/Bus.svc/json/jRoutes';
const options = {
  method: 'GET',
  headers: {
    api_key: apiKey
  },
  mode: 'no-cors'
};

const loadRoutesInitiation = () => ({
  type: types.LOAD_ROUTES_INITIATION
});

const loadRoutesSuccess = (routes) => ({
  type: types.LOAD_ROUTES_SUCCESS,
  routes
});

const loadRoutesError = (error) => ({
  type: types.LOAD_ROUTES_ERROR,
  error
});

export const clearRoutesErrors = () => ({
  type: types.CLEAR_ROUTES_ERRORS
});

export const selectRoute = (selectedRoute) => ({
  type: types.SELECT_ROUTE,
  selectedRoute
});

export const fetchRoutes = () => (dispatch) => {
  dispatch(loadRoutesInitiation());
  return fetch(routeUrl, options)
      .then(res => res.json())
      .then(data => dispatch(loadRoutesSuccess(data.Routes)))
      .catch(error => dispatch(loadRoutesError(error)));
};
