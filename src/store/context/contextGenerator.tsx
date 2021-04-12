import React, {Reducer, useReducer} from 'react';
import type {Action, State} from '../../types/Types';
import authReducer, {
  INIT_STATE as initAuthState,
} from '../reducers/authReducer';
import todoReducer, {
  INIT_STATE as initTodoState,
} from '../reducers/todoReducer';

var Context = React.createContext({});

const Provider = ({children}: any): any => {
  const [authState, authDispatch] = useReducer<Reducer<State, Action>>(
    authReducer,
    initAuthState,
  );
  const [todoState, todoDispatch] = useReducer<Reducer<State, Action>>(
    todoReducer,
    initTodoState,
  );
  const providerValues = {
    authState,
    authDispatch,
    todoState,
    todoDispatch,
  };
  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};

export {Context, Provider};
