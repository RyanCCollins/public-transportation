import * as types from '../constants/schedule';
const baseUrl = 'https://transportapi.com/v3/uk/train/station/';
const apiKeys = 'app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';

const routeApiUrl = (from, to) =>
  `https://transportapi.com/v3/uk/public/journey/from/${from}/to/${to}.json?${apiKeys}`;
import dbLoad from '../data/db';

// url :: String -> Url
const defaultScheduleUrl = () =>
    `${baseUrl}BVD/2017-01-14/10:15/timetable.json?${apiKeys}`;

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

// clearSelectedScheduleItem :: None -> Action
export const clearSelectedScheduleItem = () => ({
  type: types.CLEAR_SELECTED_SCHEDULE_ITEM
});

// toggleMoreInfo :: None -> Action
export const toggleMoreInfo = () => ({
  type: types.TOGGLE_MORE_INFO
});

// defaultScheduleLoadInitiation :: None -> {Action}
export const defaultScheduleLoadInitiation = () => ({
  type: types.DEFAULT_SCHEDULE_LOAD_INITIATION
});

// defaultScheduleLoadFailure :: Error -> {Action}
export const defaultScheduleLoadFailure = (error) => ({
  type: types.DEFAULT_SCHEDULE_LOAD_FAILURE,
  error
});

// defaultScheduleLoadSuccess :: [Items] -> {Action}
export const defaultScheduleLoadSuccess = (items) => ({
  type: types.DEFAULT_SCHEDULE_LOAD_SUCCESS,
  items
});

// persistSchedule :: Array -> Transaction
const persistSchedule = (items) => {
  dbLoad.then(db => {
    const tx = db.transaction('schedule', 'readwrite');
    const dbStore = tx.objectStore('schedule');
    items.forEach(item => {
      dbStore.put(item);
    });
    return tx.complete;
  });
};

// loadCachedDefaultSchedule
//    :: None -> Dispatch func -> Promise : Data || Error
export const loadCachedDefaultSchedule = () =>
  (dispatch) => {
    dispatch(defaultScheduleLoadInitiation());
    dbLoad.then(db => {
      const index = db
        .transaction('schedule')
        .objectStore('schedule');
      try {
        return index.getAll();
      } catch (e) {
        // If an error message is present in the error, return that,
        // Otherwise construct an error with a message.
        const error = typeof e.message !== 'undefined' ? e : {
          message: 'An unknown error occured while loading the train schedule'
        };
        throw new Error(error);
      }
    })
    .then(data => {
      dispatch(
        defaultScheduleLoadSuccess(data)
      );
    })
    .catch(err => {
      let error = {};
      if (err && err.message !== null || typeof err.message !== 'undefined') {
        error = err;
      } else {
        error = new Error('An unknown Error occured.');
      }
      dispatch(
        defaultScheduleLoadFailure(error)
      );
    });
  };

// fetchAndCacheDefaultSchedule :: None -> Dispatch Func -> Promise Data Error
export const fetchAndCacheDefaultSchedule = () =>
  (dispatch) => {
    dispatch(defaultScheduleLoadInitiation());
    fetch(defaultScheduleUrl())
      .then(data => data.json())
      .then(data => data.departures.all)
      .then(data => {
        try {
          persistSchedule(data);
        } catch (e) {
          throw e;
        }
        dispatch(
          defaultScheduleLoadSuccess(data)
        );
      })
      .catch(err =>
        dispatch(
          defaultScheduleLoadFailure(err)
        )
      );
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
      dispatch(scheduleLoadInitiation(departure, arrival));
      fetch(routeApiUrl(departure, arrival))
        .then(res => res.json())
        .then(data => {
          if (!data || !data.routes) {
            throw new Error('No data returned from the server.  Please try again at a later time.');
          }
          const {
            routes
          } = data;
          return routes;
        })
        .then(departures =>
          dispatch(scheduleLoadSuccess(departures))
        )
        .catch(error =>
          dispatch(scheduleLoadFailure(error))
        );
    };
