import {
  REQUEST_SCHEDULE,
  RECEIVE_SCHEDULE
} from '../constants/schedule';
const schedule = (state = {
  isLoading: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_SCHEDULE:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.items
      });
    default:
      return state;
  }
};

export default schedule;
