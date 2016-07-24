import expect from 'expect';
import * as types from '../../src/constants/stations';
import reducer from '../../src/reducers/stations';
import state from '../../src/store/initialState';

const initialState = state.stations;

describe('stations reducer', () => {
  it('should return the initial state when no action is present', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should start loading when the request has been made', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_STATIONS_INITIATION
      })
    ).toEqual({
      items: [],
      isLoading: true,
      errors: [],
      selectedDepartureStation: null,
      selectedArrivalStation: null
    });
  });
  it('should add all stations to the items list and stop loading.', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_STATIONS_SUCCESS,
        stations: [
          {
            station_code: 'ABW',
            atcocode: null,
            tiploc_code: 'ABWD',
            name: 'Abbey Wood',
            mode: 'train'
          }
        ]
      })
    ).toEqual({
      items: [
        {
          station_code: 'ABW',
          atcocode: null,
          tiploc_code: 'ABWD',
          name: 'Abbey Wood',
          mode: 'train'
        }
      ],
      isLoading: false,
      errors: [],
      selectedDepartureStation: null,
      selectedArrivalStation: null
    });
  });
  it('should add an error to the error array', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_STATIONS_ERROR,
        error: {
          message: 'This is a test of the emergency broadcast system'
        }
      })
    ).toEqual({
      items: [],
      isLoading: false,
      errors: [
        {
          message: 'This is a test of the emergency broadcast system'
        }
      ],
      selectedDepartureStation: null,
      selectedArrivalStation: null
    });
  });
  it('should add a selected station to the selectedDepartureStation key', () => {
    expect(
      reducer(initialState, {
        type: types.SELECT_DEPARTURE_STATION,
        station: 'ABK'
      })
    ).toEqual({
      items: [],
      isLoading: false,
      errors: [],
      selectedDepartureStation: 'ABK',
      selectedArrivalStation: null
    });
  });
  it('should add a selected station to the selectedArrivalStation key', () => {
    expect(
      reducer(initialState, {
        type: types.SELECT_ARRIVAL_STATION,
        station: 'ABK'
      })
    ).toEqual({
      items: [],
      isLoading: false,
      errors: [],
      selectedDepartureStation: null,
      selectedArrivalStation: 'ABK'
    });
  });
  it('should add an array of errors to the errors key', () => {
    expect(
      reducer(initialState, {
        type: types.SHOW_STATION_ERRORS,
        errors: [
          {
            message: 'This is a test of the emergency broadcast system'
          },
          {
            message: 'This is also a test of the emergency broadcast system'
          }
        ]
      })
    ).toEqual({
      items: [],
      isLoading: false,
      errors: [
        {
          message: 'This is a test of the emergency broadcast system'
        },
        {
          message: 'This is also a test of the emergency broadcast system'
        }
      ],
      selectedDepartureStation: null,
      selectedArrivalStation: null
    });
  });
  it('should clear the errors array', () => {
    expect(
      reducer(initialState, {
        type: types.CLEAR_STATION_ERRORS
      })
    ).toEqual({
      items: [],
      isLoading: false,
      errors: [],
      selectedDepartureStation: null,
      selectedArrivalStation: null
    });
  });
});
