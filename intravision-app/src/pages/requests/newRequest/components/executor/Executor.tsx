import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Simulate } from 'react-dom/test-utils';
import { getPopupStatus, getUsers } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledExecutor from './styled';
import choosePersonAction from '../../../../../actions/choosePersonAction';

const Executor: React.FC = () => {
  const users = useSelector(getUsers);
  const popupStatus = useSelector(getPopupStatus);
  const { changeStatus } = choosePersonAction;
  const dispatch = useDispatch();

  return (
    <StyledApplicant>
      <p>Исполнитель</p>
      <StyledExecutor
        onClick={() => dispatch(changeStatus(!popupStatus))}
      >
        {users[2].name}
      </StyledExecutor>
    </StyledApplicant>
  );
};

export default Executor;
