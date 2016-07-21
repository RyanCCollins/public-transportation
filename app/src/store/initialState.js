import stops from '../data/loadData';
const initalState = {
  help: {
    stepIndex: 0
  },
  navbar: {
    isOpen: false
  },
  stations: {
    items: [],
    isLoading: false,
    errors: [],
    selectedDepartureStation: null,
    selectedArrivalStation: null
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
