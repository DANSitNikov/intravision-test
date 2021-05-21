import { Dispatch } from 'redux';
import axios from 'axios';
import { Request } from '../reducers/requestsReducer';

const requestsAction = {
  setAllRequests: (requests: Array<Request>) => ({
    type: 'SET_REQUESTS',
    requests,
  }) as const,
  updateRequests: (request: Request) => ({
    type: 'UPDATE_REQUESTS',
    request,
  }) as const,
};

export const getAllRequests = () => async (dispatch: Dispatch) => {
  const response = await axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc');
  const data = response.data.value.reverse();
  dispatch(requestsAction.setAllRequests(data));
};

export const updateCurRequest = (requests: Request) => async (dispatch: Dispatch) => {
  await axios.put('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Tasks', {
    ...requests,
  }).catch((err) => console.log(err));
};

export default requestsAction;
