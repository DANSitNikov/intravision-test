import { GlobalState } from '../reducers/rootReducer';
import { Request } from '../reducers/requestsReducer';
import { Priority, Status, User } from '../reducers/requestParametersReducer';

export const getNewReqPanelStatus = (state: GlobalState): boolean => state.newRequest.active;
export const getNewReqEditPanelStatus = (state: GlobalState): boolean => {
  return state.newRequest.editPanelStatus;
};
export const getRequests = (state: GlobalState): Array<Request> => state.requests.requests;
export const getStatuses = (state: GlobalState): Array<Status> => state.parameters.statuses;
export const getUsers = (state: GlobalState): Array<User> => state.parameters.users;
export const getPriorities = (state: GlobalState): Array<Priority> => state.parameters.priorities;
