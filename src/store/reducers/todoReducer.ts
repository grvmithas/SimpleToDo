import type {Action} from '../../types/Types';
import {todoAction} from '../actions/todoActions';

export const INIT_STATE = {
  error: '',
  list: [],
  loader: false,
};
const todoReducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case todoAction.ACTION_START:
      return {
        ...state,
        loader: true,
        error: '',
        list: [],
      };
    case todoAction.ACTION_SUCCESS:
      console.log('log action', action.payload);
      return {
        ...state,
        loader: false,
        error: null,
        list: action.payload.data,
      };
    case todoAction.ACTION_ERROR:
      return {
        ...state,
        list: [],
        error: action.payload.error,
        loader: false,
      };
    default:
      return state;
  }
};

export default todoReducer;
