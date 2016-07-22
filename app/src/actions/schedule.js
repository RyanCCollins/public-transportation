import * as types from '../constants/schedule';
const baseUrl = 'http://transportapi.com/v3/uk/train/station/';
const apiKeys = 'app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97';

// url :: String -> Url
const url =
  (stationId) =>
    `${baseUrl}${stationId}/timetable.json?${apiKeys}`;

// scheduleLoadInitiation :: String -> String -> {Action, String, String}
export const scheduleLoadInitiation =
  (departureId, arrivalId) => ({
    type: types.SCHEDULE_LOAD_INITIATION,
    departureId,
    arrivalId
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

/**
 * @function fetchSchedule
 * @description Loads the train schedule through the api
 * @param departureId, arrivalId - the id of the state for departure and arrivalId
 * @param dispatch - the store's dispatch
 */
export const fetchSchedule =
  (departureId, arrivalId) =>
    (dispatch) => {
      dispatch(
        scheduleLoadInitiation(departureId, arrivalId)
      );
      fetch(url(departureId))
        .then(res => res.json())
        .then(data => {
          if (!data || !data.departures) {
            throw new Error('The network request failed due to unknown reasons.');
          }
          const { all } = data.departures;
          return all;
        })
        .then(departures =>
          dispatch(scheduleLoadSuccess(departures))
        )
        .catch(error =>
          dispatch(scheduleLoadFailure(error))
        );
    };
