import { Dispatch } from 'redux';
import axios from 'axios';

const requestsAction = {
  getAllRequests: (requests: any) => ({
    type: 'GET_REQUESTS',
    requests,
  }) as const,
};

export const getAllRequests = () => async (dispatch: Dispatch) => {
  const response = await axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc');
  const data = response.data.value.reverse();
  dispatch(requestsAction.getAllRequests(data));
};

export default requestsAction;
