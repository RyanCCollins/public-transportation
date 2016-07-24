import expect from 'expect';
import * as types from '../../src/constants/settings';
import reducer from '../../src/reducers/settings';
import { settings } from '../../src/store/initialState';
const initialState = settings;

describe('settings reducer', () => {
  it('should return the initial settings (initial state)', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(settings);
  });

  it('should toggle fun mode from false to true', () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_FUN_MODE
      })
    ).toEqual({
      funMode: !initialState.funMode
    });
  });

  it('should switch mapMode from true to false', () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_MAP_MODE
      })
    ).toEqual({
      mapMode: !initialState.mapMode
    });
  });
});
