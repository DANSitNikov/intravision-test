import { Dispatch } from 'redux';
import axios from 'axios';
import { Priority, Status, User } from '../reducers/requestParametersReducer';

const requestParametersAction = {
  setStatuses: (statuses: Array<Status>) => ({
    type: 'SET_STATUSES',
    statuses,
  }) as const,
  setUsers: (users: Array<User>) => ({
    type: 'SET_USERS',
    users,
  }) as const,
  setPriorities: (priorities: Array<Priority>) => ({
    type: 'SET_PRIORITIES',
    priorities,
  }) as const,
};

export const statusesRequest = () => async (dispatch: Dispatch) => {
  const { setStatuses } = requestParametersAction;
  const response = await axios.get('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Statuses');
  const { data } = response;
  dispatch(setStatuses(data));
};

export const usersRequest = () => async (dispatch: Dispatch) => {
  const { setUsers } = requestParametersAction;
  const response = await axios.get('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Users');
  const { data } = response;
  dispatch(setUsers(data));
};

export const prioritiesRequest = () => async (dispatch: Dispatch) => {
  const { setPriorities } = requestParametersAction;
  const response = await axios.get('http://intravision-task.test01.intravision.ru/api/4c7ebd5a-e44a-45a8-bddb-ecba2a4d2cbc/Priorities');
  const { data } = response;
  dispatch(setPriorities(data));
};

export default requestParametersAction;
