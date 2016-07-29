const initalState = {
  settings: {
    funMode: false,
    mapMode: true,
    offlineMode: false,
    map: {
      apiKey: 'AIzaSyCz2jImumhfV62v8JtrjwfSsrsTfWJ9qn4'
    }
  },
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
  schedule: {
    isLoading: false,
    items: [],
    errors: [],
    departureId: null,
    arrivalId: null,
    selectedItemIndex: null,
    isViewingMoreInfo: false
  },
  errors: []
};

export default initalState;
