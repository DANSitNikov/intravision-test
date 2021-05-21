import { ActionsType } from './rootReducer';
import commentAction from '../actions/commentAction';

export interface Comment {
  'id': number,
  comment: string,
}

const initialState = {
  comments: [] as Array<Comment>,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof commentAction>;

const commentReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'ADD_COMMENT': {
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    }
    default:
      return state;
  }
};

export default commentReducer;
