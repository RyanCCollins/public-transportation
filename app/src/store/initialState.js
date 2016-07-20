import stops from '../data/loadData';
const initalState = {
  help: {
    stepIndex: 0
  },
  navbar: {
    isOpen: false
  },
  stops: {
    items: [],
    isLoading: false,
    errors: [],
    selectedDepartureStop: null,
    selectedArrivalStop: null
  },
  routes: {
    items: [],
    selectedRoute: null,
    errors: [],
    isLoading: true
  },
  schedule: {
    isLoading: false,
    errors: [],
    items: []
  },
  errors: []
};

export default initalState;
