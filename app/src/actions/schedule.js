import * as types from '../constants/schedule';

export const requestSchedule = (departure, arrival) => ({
  type: types.REQUEST_SCHEDULE,
  departure,
  arrival
});
