import * as types from '../constants/stops';
const baseUrl = 'http://api.metro.net/agencies/lametro/routes/';
const routeUrl = (routeId) => `${baseUrl}${routeId}/`;
const loadStopsUrl = (routeId) => `${routeUrl(routeId)}stops/`;
const loadStopUrl = (routeId, stopId) => `${loadStopsUrl(routeId)}${stopId}/`;
const stopInfoUrl = (routeId, stopId) => `${loadStopUrl(routeId, stopId)}/info/`;
const stopPredictionsUrl = (routeId, stopId) => `${loadStopUrl(routeId, stopId)}/predictions/`;

const loadStopsInitiation = () => ({
  type: types.LOAD_STOPS_INITIATION
});

const loadStopsSuccess = (stops) => ({
  type: types.LOAD_STOPS_SUCCESS,
  stops
});

const loadStopsError = (error) => ({
  type: types.LOAD_STOPS_ERROR,
  error
});

export const selectDepartureStop = (stop) => ({
  type: types.SELECT_DEPARTURE_STOP,
  stop
});

export const selectArrivalStop = (stop) => ({
  type: types.SELECT_ARRIVAL_STOP,
  stop
});

export const fetchRouteStops = (routeId) => {
  return dispatch => {
    dispatch(loadStopsInitiation());
    return fetch(loadStopsUrl(routeId))
      .then(res => res.json())
      .then(data => dispatch(loadStopsSuccess(data.items)))
      .catch(error => dispatch(loadStopsError(error)));
  };
};
