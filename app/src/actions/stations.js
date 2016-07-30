import * as types from '../constants/stations';
const apiKeys = 'app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';
const baseUrl = 'http://transportapi.com/v3/uk/train/stations/near.json';
const apiUrl = `${baseUrl}?${apiKeys}`;
const latLong = '&lat=51.5074&lon=0.1278';
const url = `${apiUrl}&${latLong}`;
import dbLoad from '../data/db';

// createError :: Error -> Action
const createError = (error) => ({
  message: error.message || error || 'An unknown error occured'
});

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

// clearSelectedStations :: None -> {Action}
export const clearSelectedStations = () => ({
  type: types.CLEAR_SELECTED_STATIONS
});

// persistStations :: Array -> Tx
const persistStations = (stations) => {
  dbLoad.then(db => {
    const tx = db.transaction('stations', 'readwrite');
    const dbStore = tx.objectStore('stations');
    stations.forEach(item => {
      dbStore.put(item);
    });
    return tx.complete;
  });
};

// loadStationsOffline :: None -> SideEffects
export const loadStationsOffline = () =>
  (dispatch) => {
    dbLoad.then(db => {
      dispatch(loadStationsInitiation());
      const index = db
        .transaction('stations')
        .objectStore('stations');
      return index
        .getAll()
        .then(stations =>
          dispatch(loadStationsSuccess(stations))
        );
    })
    .catch(error => dispatch(
      loadStationsError(createError(error))
    ));
  };

// fetchStations :: None -> Func -> Maybe Event
export const fetchStations = () =>
  (dispatch) => {
    dispatch(loadStationsInitiation());
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const stations = data.stations;
        persistStations(stations);
        dispatch(loadStationsSuccess(stations));
      })
      .catch(error => dispatch(
        loadStationsError(createError(error))
      ));
  };
