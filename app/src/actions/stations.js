import * as types from '../constants/stations';
const baseUrl = 'http://transportapi.com/v3/uk/train/stations/near.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';
const latLong = 'lat=51.5074&lon=0.1278';
const url = `${baseUrl}&${latLong}`;

const loadStationsInitiation = () => ({
  type: types.LOAD_STATIONS_INITIATION
});

const loadStationsSuccess = (stops) => ({
  type: types.LOAD_STATIONS_SUCCESS,
  stops
});

const loadStationsError = (error) => ({
  type: types.LOAD_STATIONS_ERROR,
  error
});

export const selectDepartureStations = (station) => ({
  type: types.SELECT_DEPARTURE_STATION,
  station
});

export const selectArrivalStations = (station) => ({
  type: types.SELECT_ARRIVAL_STATION,
  station
});

export const fetchStations = () => {
  return dispatch => {
    dispatch(loadStationsInitiation());
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(loadStationsSuccess(data.stations)))
      .catch(error => dispatch(loadStationsError(error)));
  };
};
