const initalState = {
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
    items: []
  },
  errors: []
};

export default initalState;
