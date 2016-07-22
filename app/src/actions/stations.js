import * as types from '../constants/stations';
const baseUrl = 'http://transportapi.com/v3/uk/train/stations/near.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';
const latLong = 'lat=51.5074&lon=0.1278';
const url = `${baseUrl}&${latLong}`;

// loadStationsInitiation :: None -> {Action}
const loadStationsInitiation = () => ({
  type: types.LOAD_STATIONS_INITIATION
});

// loadStationsSuccess :: [Object] -> {Action}
const loadStationsSuccess = (stations) => ({
  type: types.LOAD_STATIONS_SUCCESS,
  stations
});

// loadStationsError :: {Error} -> {Action}
const loadStationsError = (error) => ({
  type: types.LOAD_STATIONS_ERROR,
  error
});

// showStationErrors :: [{Error}] -> {Action}
export const showStationErrors = (errors) => ({
  type: types.SHOW_STATION_ERRORS,
  errors
});

// clearStationErrors :: None -> {Action}
export const clearStationErrors = () => ({
  type: types.CLEAR_STATION_ERRORS
});

// selectDepartureStation :: String -> {Action}
export const selectDepartureStation = (station) => ({
  type: types.SELECT_DEPARTURE_STATION,
  station
});

// selectArrivalStation :: String -> {Action}
export const selectArrivalStation = (station) => ({
  type: types.SELECT_ARRIVAL_STATION,
  station
});

// fetchStations :: None -> Func -> Maybe Event
export const fetchStations = () =>
  (dispatch) => {
    dispatch(loadStationsInitiation());
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(loadStationsSuccess(data.stations)))
      .catch(error => dispatch(loadStationsError(error)));
  };
