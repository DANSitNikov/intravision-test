import { ActionsType } from './rootReducer';
import choosePersonAction from '../actions/choosePersonAction';

const initialState = {
  status: false as boolean,
  name: '' as string,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof choosePersonAction>

const choosePersonReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'CHANGE_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default choosePersonReducer;
