import { combineReducers } from 'redux';
import createNewRequestReducer from './createNewRequestReducer';

const rootReducer = combineReducers({
  newRequest: createNewRequestReducer,
});

type RootReducer = typeof rootReducer;
export type GlobalState = ReturnType<RootReducer>;

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsType<
  T extends {[key: string]: (...args: any[]) => any}
  > = ReturnType<PropertiesType<T>>;

export default rootReducer;
