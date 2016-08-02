import expect from 'expect';
import * as actions from '../../src/actions/stations';
import * as types from '../../src/constants/stations';

describe('actions', () => {
  it('should create an action to initiate station loading', () => {
    const expectedAction = {
      type: types.LOAD_STATIONS_INITIATION
    };
    expect(
      actions.loadStationsInitiation()
    ).toEqual(expectedAction);
  });
  it('should create an action to indicate success of loading stations', () => {
    const stations = [
      {
        id: 1,
        name: 'My Station'
      },
      {
        id: 2,
        name: 'Another station'
      }
    ];
    const expectedAction = {
      type: types.LOAD_STATIONS_SUCCESS,
      stations
    };
    expect(
      actions.loadStationsSuccess(stations)
    ).toEqual(expectedAction);
  });
  it('should create an action to indicate failure of loading stations', () => {
    const error = { message: 'An error has occured' };
    const expectedAction = {
      type: types.LOAD_STATIONS_ERROR,
      error
    };
    expect(
      actions.loadStationsError(error)
    ).toEqual(expectedAction);
  });
  it('should create an action to show multiple errors for the stations object', () => {
    const errors = [
      {
        message: 'An error has occured'
      },
      {
        message: 'Another error has occured'
      }
    ];
    const expectedAction = {
      type: types.LOAD_STATIONS_ERROR,
      errors
    };
    expect(
      actions.showStationErrors(errors)
    ).toEqual(expectedAction);
  });
  it('should create an action to clear all errors from the stations object', () => {
    const expectedAction = {
      type: types.CLEAR_STATION_ERRORS
    };
    expect(
      actions.clearStationErrors()
    ).toEqual(expectedAction);
  });
  it('should create an action to select a departure train station', () => {
    const station = 'ABW';
    const expectedAction = {
      type: types.SELECT_DEPARTURE_STATION,
      station
    };
    expect(
      actions.selectDepartureStation(station)
    ).toEqual(expectedAction);
  });
  it('should create an action to select an arrival train station', () => {
    const station = 'ABW';
    const expectedAction = {
      type: types.SELECT_ARRIVAL_STATION,
      station
    };
    expect(
      actions.selectArrivalStation(station)
    ).toEqual(expectedAction);
  });
  it('should create an action to clear the selected train stations', () => {
    const expectedAction = {
      type: types.CLEAR_SELECTED_STATIONS
    };
    expect(
      actions.clearSelectedStations()
    ).toEqual(expectedAction);
  });
});
