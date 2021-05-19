import { GlobalState } from '../reducers/rootReducer';

export const getNewReqPanelStatus = (state: GlobalState): boolean => state.newRequest.active;
