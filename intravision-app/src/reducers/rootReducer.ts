import { combineReducers } from 'redux';
import createNewRequestReducer from './createNewRequestReducer';
import requestsReducer from './requestsReducer';
import requestParametersReducer from './requestParametersReducer';
import choosePersonReducer from './choosePersonReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  newRequest: createNewRequestReducer,
  requests: requestsReducer,
  parameters: requestParametersReducer,
  choosePerson: choosePersonReducer,
  comments: commentReducer,
});

type RootReducer = typeof rootReducer;
export type GlobalState = ReturnType<RootReducer>;

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsType<
  T extends {[key: string]: (...args: any[]) => any}
  > = ReturnType<PropertiesType<T>>;

export default rootReducer;
