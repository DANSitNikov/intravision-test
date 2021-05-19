import { ActionsType } from './rootReducer';
import createNewRequestAction from '../actions/createNewRequsetAction';

const initialState = {
  active: false as boolean,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof createNewRequestAction>;

const createNewRequestReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_STATUS_PANEL':
      return {
        ...state,
        active: action.active,
      };
    default:
      return state;
  }
};

export default createNewRequestReducer;
