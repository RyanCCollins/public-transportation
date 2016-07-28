import * as types from '../constants/index';

// reset :: None -> {Action}
export const reset = () => ({
  type: types.RESET
});


export const reload = () => ({
  type: types.RELOAD
});

export const refreshAndReload = () =>
  (dispatch) => {
    dispatch(reset());
    document.location.reload();
    dispatch(reload());
  };
