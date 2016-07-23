import {
  SCHEDULE_LOAD_FAILURE,
  SCHEDULE_LOAD_SUCCESS,
  SCHEDULE_LOAD_INITIATION,
  CLEAR_SCHEDULE_ERRORS,
  SELECT_SCHEDULE_ITEM,
  TOGGLE_MORE_INFO,
  CLEAR_SELECTED_SCHEDULE_ITEM
} from '../constants/schedule';

const schedule = (state = {
  isLoading: false,
  items: [],
  errors: [],
  departure: null,
  arrival: null,
  selectedItemIndex: null,
  isViewingMoreInfo: false
}, action) => {
  switch (action.type) {
    case SCHEDULE_LOAD_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
        departure: action.departure,
        arrival: action.arrival
      });
    case SCHEDULE_LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.items
      });
    case SCHEDULE_LOAD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [
          ...state.errors,
          action.error
        ]
      });
    case CLEAR_SCHEDULE_ERRORS:
      return Object.assign({}, state, {
        errors: []
      });
    case SELECT_SCHEDULE_ITEM:
      return Object.assign({}, state, {
        selectedItemIndex: action.index
      });
    case CLEAR_SELECTED_SCHEDULE_ITEM:
      return Object.assign({}, state, {
        selectedItemIndex: null
      });
    case TOGGLE_MORE_INFO:
      return Object.assign({}, state, {
        isViewingMoreInfo: !state.isViewingMoreInfo
      });
    default:
      return state;
  }
};

export default schedule;
