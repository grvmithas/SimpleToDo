import type {Action} from '../../types/Types';
import {loginAction} from '../actions/authActions';

export const INIT_STATE = {
  error: '',
  token: '',
  loader: false,
  authData: {
    userName: '',
    password: '',
    email: '',
  },
};
const authReducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case loginAction.ACTION_START:
      return {
        ...state,
        loader: true,
        error: '',
      };
    case loginAction.ACTION_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
        token: action.payload.token,
        authData: action.payload.authData,
      };
    case loginAction.ACTION_ERROR:
      return {
        ...state,
        token: '',
        error: action.payload.error,
        loader: false,
        authData: INIT_STATE.authData,
      };
    default:
      return state;
  }
};

export default authReducer;
