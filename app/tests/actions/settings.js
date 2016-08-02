import expect from 'expect';
import * as actions from '../../src/actions/settings';
import * as types from '../../src/constants/settings';

describe('actions', () => {
  it('should create an action to toggle fun mode', () => {
    const expectedAction = {
      type: types.TOGGLE_FUN_MODE
    };
    expect(
      actions.toggleFunMode()
    ).toEqual(expectedAction);
  });
  it('should create an action to toggle map mode', () => {
    const expectedAction = {
      type: types.TOGGLE_MAP_MODE
    };
    expect(
      actions.toggleMapMode()
    ).toEqual(expectedAction);
  });
  it('should create an action to toggle offline mode', () => {
    const expectedAction = {
      type: types.TOGGLE_OFFLINE_MODE
    };
    expect(
      actions.toggleOfflineMode()
    ).toEqual(expectedAction);
  });
  it('should create an action to manually set the offline mode with a toastr message', () => {
    const mode = false;
    const message = 'This is a test of the emergency broacast system';
    const expectedAction = {
      type: types.SET_OFFLINE_MODE,
      mode,
      message
    };
    expect(
      actions.setOfflineMode(mode, message)
    ).toEqual(expectedAction);
  });
});
