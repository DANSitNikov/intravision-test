import { GlobalState } from '../reducers/rootReducer';
import { Request } from '../reducers/requestsReducer';

export const getNewReqPanelStatus = (state: GlobalState): boolean => state.newRequest.active;
export const getNewReqEditPanelStatus = (state: GlobalState): boolean => {
  return state.newRequest.editPanelStatus;
};
export const getRequests = (state: GlobalState): Array<Request> => state.requests.requests;
