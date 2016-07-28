import * as types from '../constants/index';

// reset :: None -> {Action}
export const reset = () => ({
  type: types.RESET
});

// export reload :: None -> Action
export const reload = () => ({
  type: types.RELOAD
});

// refreshAndReload :: None -> Dispatch -> SideEffect
export const refreshAndReload = () =>
  (dispatch) => {
    dispatch(reset());
    document.location.reload();
    dispatch(reload());
  };
