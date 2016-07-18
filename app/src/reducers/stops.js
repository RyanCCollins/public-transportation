import {
  LOAD_STOPS_SUCCESS,
  LOAD_STOPS_INITIATION,
  LOAD_STOPS_ERROR,
  SELECT_DEPARTURE_STOP,
  SELECT_ARRIVAL_STOP
} from '../constants/stops';
const stops = (state = {
  items: [],
  errors: [],
  isLoading: false,
  selectedDepartureStop: null,
  selectedArrival: null
}, action) => {
  switch (action.type) {
    case LOAD_STOPS_INITIATION:
      return Object.assign({}, state, {
        isLoading: true
      });
    case LOAD_STOPS_SUCCESS:
      return Object.assign({}, state, {
        items: action.stops,
        isLoading: false
      });
    case LOAD_STOPS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [
          ...state.errors,
          action.error
        ]
      });
    case SELECT_DEPARTURE_STOP:
      return Object.assign({}, state, {
        selectedDepartureStop: state.stop
      });
    case SELECT_ARRIVAL_STOP:
      return Object.assign({}, state, {
        selectedArrivalStop: state.stop
      });
    default:
      return state;
  }
};

export default stops;
