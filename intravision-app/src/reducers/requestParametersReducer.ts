import { ActionsType } from './rootReducer';
import requestParametersAction from '../actions/requestParametersAction';

export interface Status {
  'rgb': string,
  'id': number,
  'name': string
}

export interface User {
  'id': number,
  'name': string,
}

export interface Priority {
  'rgb': string,
  'id': number,
  'name': string,
}

const initialState = {
  statuses: [] as Array<Status>,
  users: [] as Array<User>,
  priorities: [] as Array<Priority>,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof requestParametersAction>

const requestParametersReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'SET_STATUSES':
      return {
        ...state,
        statuses: action.statuses,
      };
    case 'SET_USERS': {
      return {
        ...state,
        users: action.users,
      };
    }
    case 'SET_PRIORITIES': {
      return {
        ...state,
        priorities: action.priorities,
      };
    }
    default:
      return state;
  }
};

export default requestParametersReducer;
