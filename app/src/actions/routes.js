import * as types from '../constants/routes';
const baseUrl = 'http://api.metro.net/agencies/lametro/routes/';
const routeUrl = (routeId) => `${baseUrl}${routeId}/`;
const loadStopsUrl = (routeId) => `${routeUrl(routeId)}stops/`;
const loadStopUrl = (routeId, stopId) => `${loadStopsUrl(routeId)}${stopId}/`;
const stopInfoUrl = (routeId, stopId) => `${loadStopUrl(routeId, stopId)}/info/`;
const stopPredictionsUrl = (routeId, stopId) => `${loadStopUrl(routeId, stopId)}/predictions/`;

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

export const selectRoute = (selectedRoute) => ({
  type: types.SELECT_ROUTE,
  selectedRoute
});

export const fetchRoutes = () => (dispatch) => {
  dispatch(loadRoutesInitiation());
  return fetch(baseUrl)
      .then(res => res.json())
      .then(data => dispatch(loadRoutesSuccess(data.items)))
      .catch(error => dispatch(loadRoutesError(error)));
};
