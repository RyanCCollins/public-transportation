import {
  LOAD_STATIONS_SUCCESS,
  LOAD_STATIONS_INITIATION,
  LOAD_STATIONS_ERROR,
  SELECT_DEPARTURE_STATION,
  SELECT_ARRIVAL_STATION,
  CLEAR_STATION_ERRORS,
  SHOW_STATION_ERRORS,
  CLEAR_SELECTED_STATIONS
} from '../constants/stations';

const stations = (state = {
  items: [],
  errors: [],
  isLoading: false,
  selectedDepartureStation: null,
  selectedArrivalStation: null
}, action) => {
  switch (action.type) {
    case LOAD_STATIONS_INITIATION:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOAD_STATIONS_SUCCESS:
      return Object.assign({}, state, {
        items: action.stations,
        isLoading: false
      });
    case LOAD_STATIONS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [
          ...state.errors,
          action.error
        ]
      });
    case SELECT_DEPARTURE_STATION:
      return Object.assign({}, state, {
        selectedDepartureStation: action.station
      });
    case SELECT_ARRIVAL_STATION:
      return Object.assign({}, state, {
        selectedArrivalStation: action.station
      });
    case SHOW_STATION_ERRORS:
      return Object.assign({}, state, {
        errors: [
          ...state.errors,
          ...action.errors
        ]
      });
    case CLEAR_STATION_ERRORS:
      return Object.assign({}, state, {
        errors: []
      });
    case CLEAR_SELECTED_STATIONS:
      return Object.assign({}, state, {
        selectedArrivalStation: null,
        selectedDepartureStation: null
      });
    default:
      return state;
  }
};

export default stations;
