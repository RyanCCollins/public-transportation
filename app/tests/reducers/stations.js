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
});
