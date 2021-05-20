import { ActionsType } from './rootReducer';
import createNewRequestAction from '../actions/createNewRequsetAction';

const initialState = {
  active: false as boolean,
  editPanelStatus: false as boolean,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof createNewRequestAction>;

const createNewRequestReducer = (state = initialState, action: ActionType): InitialState => {
  console.log(initialState, 'state');
  switch (action.type) {
    case 'CHANGE_ACTIVE_STATUS_PANEL':
      return {
        ...state,
        active: action.active,
      };
    case 'CHANGE_ACTIVE_STATUS_EDIT_PANEL':
      return {
        ...state,
        editPanelStatus: action.editPanelStatus,
      };
    default:
      return state;
  }
};

export default createNewRequestReducer;
