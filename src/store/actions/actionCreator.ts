import type {Action} from '../../types/Types';

const START = 'start';
const SUCCESS = 'success';
const ERROR = 'error';

const createAction = (actionName: String) => {
  const actiontypes = {
    ACTION_START: `${actionName}_${START}`.toUpperCase(),
    ACTION_SUCCESS: `${actionName}_${SUCCESS}`.toUpperCase(),
    ACTION_ERROR: `${actionName}_${ERROR}`.toUpperCase(),
  };

  const actionStart = (payload: any): Action => {
    return {
      type: actiontypes.ACTION_START,
      payload,
    };
  };
  const actionSuccess = (payload: any): Action => {
    return {
      type: actiontypes.ACTION_SUCCESS,
      payload,
    };
  };

  const actionError = (payload: any): Action => {
    return {
      type: actiontypes.ACTION_ERROR,
      payload,
    };
  };

  return {
    ...actiontypes,
    actionStart,
    actionSuccess,
    actionError,
  };
};

export default createAction;
