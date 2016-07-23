import * as types from '../constants/schedule';
const baseUrl = 'http://transportapi.com/v3/uk/train/station/';
const apiKeys = 'app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';
const routeApiUrl = (from, to) =>
  `http://transportapi.com/v3/uk/public/journey/from/${from}/to/${to}.json?${apiKeys}`;
import dbLoad from '../data/db';

// url :: String -> Url
const url =
  (stationId) =>
    `${baseUrl}${stationId}/timetable.json?${apiKeys}`;

// scheduleLoadInitiation :: String -> String -> {Action, String, String}
export const scheduleLoadInitiation =
  (departure, arrival) => ({
    type: types.SCHEDULE_LOAD_INITIATION,
    departure,
    arrival
  });

// clearScheduleErrors :: None -> {Action}
export const clearScheduleErrors = () => ({
  type: types.CLEAR_SCHEDULE_ERRORS
});

// scheduleLoadSuccess :: [Item] -> {Action, [Item]}
export const scheduleLoadSuccess = (items) => ({
  type: types.SCHEDULE_LOAD_SUCCESS,
  items
});

// scheduleLoadFailure :: Error -> {Action, Error}
export const scheduleLoadFailure = (error) => ({
  type: types.SCHEDULE_LOAD_FAILURE,
  error
});

// selectScheduleItem :: Int -> {Action}
export const selectScheduleItem = (index) => ({
  type: types.SELECT_SCHEDULE_ITEM,
  index
});

export const clearSelectedScheduleItem = () => ({
  type: types.CLEAR_SELECTED_SCHEDULE_ITEM
});

export const toggleMoreInfo = () => ({
  type: types.TOGGLE_MORE_INFO
});

const persistSchedule = (items) => {
  dbLoad.then(db => {
    const tx = db.transaction('schedule', 'readwrite')
  });
};

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
    });
  };


/**
 * @function fetchSchedule
 * @description Loads the train schedule through the api
 * @param departureId, arrivalId - the id of the state for departure and arrivalId
 * @param dispatch - the store's dispatch
 */
export const fetchSchedule =
  (departure, arrival) =>
    (dispatch) => {
      dispatch(
        scheduleLoadInitiation(departure, arrival)
      );
      fetch(routeApiUrl(departure, arrival))
        .then(res => res.json())
        .then(data => {
          if (!data) {
            throw new Error('The network request failed due to unknown reasons.');
          } else if (!data.routes) {
            throw new Error(`No schdule found for this route at this time.`);
          }
          return data.routes;
        })
        .then(departures =>
          dispatch(scheduleLoadSuccess(departures))
        )
        .catch(error =>
          dispatch(scheduleLoadFailure(error))
        );
    };
