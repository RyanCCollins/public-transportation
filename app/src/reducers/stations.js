import {
  LOAD_STATIONS_SUCCESS,
  LOAD_STATIONS_INITIATION,
  LOAD_STATIONS_ERROR,
  SELECT_DEPARTURE_STATION,
  SELECT_ARRIVAL_STATION
} from '../constants/stations';
const stops = (state = {
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
        items: action.stops,
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
        selectedDepartureStation: state.station
      });
    case SELECT_ARRIVAL_STATION:
      return Object.assign({}, state, {
        selectedArrivalStation: state.station
      });
    default:
      return state;
  }
};

export default stops;
