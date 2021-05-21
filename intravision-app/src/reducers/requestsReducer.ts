import { ActionsType } from './rootReducer';
import requestsAction from '../actions/requestsAction';

interface Tags {
  'id': number,
  'name': string
}

export interface Request {
  'id': number,
  'name': string,
  'description': string,
  'createdAt': string,
  'updatedAt': string,
  'price': number,
  'taskTypeId': number,
  'taskTypeName': string,
  'statusId': number,
  'statusName': string,
  'statusRgb': string,
  'priorityId': number,
  'priorityName': string,
  'serviceId': number,
  'serviceName': string,
  'resolutionDatePlan': string,
  'initiatorId': number,
  'initiatorName': string,
  'executorId': number,
  'executorName': string,
  'executorGroupId': number,
  'executorGroupName': string,
  'tags': Array<Tags>,
}

const initialState = {
  requests: [] as Array<Request>,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof requestsAction>

const requestsReducer = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'SET_REQUESTS':
      return {
        ...state,
        requests: action.requests,
      };
    case 'UPDATE_REQUESTS': {
      return {
        ...state,
        requests: [action.request, ...state.requests],
      };
    }
    default:
      return state;
  }
};

export default requestsReducer;
