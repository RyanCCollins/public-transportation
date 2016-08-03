import {
  SCHEDULE_LOAD_FAILURE,
  SCHEDULE_LOAD_SUCCESS,
  SCHEDULE_LOAD_INITIATION,
  CLEAR_SCHEDULE_ERRORS,
  SELECT_SCHEDULE_ITEM,
  TOGGLE_MORE_INFO,
  CLEAR_SELECTED_SCHEDULE_ITEM,
  DEFAULT_SCHEDULE_LOAD_INITIATION,
  DEFAULT_SCHEDULE_LOAD_SUCCESS,
  DEFAULT_SCHEDULE_LOAD_FAILURE
} from '../constants/schedule';

const schedule = (state = {
  isLoading: false,
  items: [],
  errors: [],
  departure: null,
  arrival: null,
  selectedItemIndex: null,
  isViewingMoreInfo: false,
  defaultSchedule: {
    hasLoaded: false,
    isLoading: false,
    errors: [],
    items: []
  }
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
    case DEFAULT_SCHEDULE_LOAD_INITIATION:
      return Object.assign({}, state, {
        defaultSchedule: {
          isLoading: true,
          hasLoaded: false
        }
      });
    case DEFAULT_SCHEDULE_LOAD_SUCCESS:
      return Object.assign({}, state, {
        defaultSchedule: {
          isLoading: false,
          items: action.items,
          hasLoaded: true
        }
      });
    case DEFAULT_SCHEDULE_LOAD_FAILURE:
      return Object.assign({}, state, {
        defaultSchedule: {
          hasLoaded: false,
          isLoading: false,
          errors: [
            ...state.defaultSchedule.errors,
            ...action.error
          ]
        }
      });
    default:
      return state;
  }
};

export default schedule;
