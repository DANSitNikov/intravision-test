import { Dispatch } from 'redux';
import axios from 'axios';

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
  // await axios.post('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Tasks', {
  //   name: request.name,
  //   description: request.description,
  //   statusId: 50482,
  //   priorityId: 42068,
  //   resolutionDatePlan: '2021-05-20T08:25:30.041Z',
  // }).then((res) => console.log('1'));

  const res = await axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc');
};

export default createNewRequestAction;
