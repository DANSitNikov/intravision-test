import { Dispatch } from 'redux';
import axios from 'axios';
import requestsAction from './requestsAction';

const createNewRequestAction = {
  changePanelStatus: (active: boolean) => ({
    type: 'CHANGE_ACTIVE_STATUS_PANEL',
    active,
  }) as const,
  changeEditPanelStatus: (editPanelStatus: boolean) => ({
    type: 'CHANGE_ACTIVE_STATUS_EDIT_PANEL',
    editPanelStatus,
  }) as const,
};

interface Request {
  name: string,
  description: string,
}

export const postNewRequest = (request: Request) => async (dispatch: Dispatch) => {
  const { updateRequests } = requestsAction;
  await axios.post('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Tasks', {
    name: request.name,
    description: request.description,
  }).catch((err) => console.log(err));

  const response = await axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc');
  const data = response.data.value.reverse();
  dispatch(updateRequests(data));
};

export default createNewRequestAction;
