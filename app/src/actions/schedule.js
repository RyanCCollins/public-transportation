import * as types from '../constants/schedule';
const baseUrl = 'http://transportapi.com/v3/uk/train/station/';
const url = (stationId) => `${baseUrl}${stationId}/timetable.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97`;

export const scheduleLoadInitiation = (departureId, arrivalId) => ({
  type: types.SCHEDULE_LOAD_INITIATION,
  departureId,
  arrivalId
});

export const scheduleLoadSuccess = (items) => ({
  type: types.SCHEDULE_LOAD_SUCCESS,
  items
});

export const scheduleLoadFailure = (error) => ({
  type: types.SCHEDULE_LOAD_FAILURE,
  error
});

export const fetchSchedule = (departureId, arrivalId) =>
(dispatch) => {
  dispatch(scheduleLoadInitiation(departureId, arrivalId));
  fetch(url(departureId))
    .then(res => res.json())
    .then(data => data.departures.all)
    .then(departures => dispatch(scheduleLoadSuccess(departures)))
    .catch(error => dispatch(scheduleLoadFailure(error)));
};
