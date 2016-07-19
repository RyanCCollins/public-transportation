import * as types from '../constants/stops';
const apiKey = 'dce33f45612348bb8c4c247f8413bb7f';
const routeUrl = 'https://api.wmata.com/Bus.svc/json/jStops';
const loadStopUrl = (routeId) => `${routeUrl}?${routeId}`;
const options = {
  method: 'GET',
  headers: {
    api_key: apiKey
  },
  mode: 'no-cors'
};

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
    return fetch(loadStopUrl(routeId), options)
      .then(res => res.json())
      .then(data => dispatch(loadStopsSuccess(data.items)))
      .catch(error => dispatch(loadStopsError(error)));
  };
};
