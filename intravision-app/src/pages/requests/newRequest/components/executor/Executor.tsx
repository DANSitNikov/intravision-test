import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledExecutor from './styled';
import choosePersonAction from '../../../../../actions/choosePersonAction';

const Executor: React.FC = () => {
  const users = useSelector(getUsers);
  const { changeStatus } = choosePersonAction;
  const dispatch = useDispatch();

  return (
    <StyledApplicant>
      <p>Исполнитель</p>
      <StyledExecutor
        onClick={() => {
          dispatch(changeStatus(true));
          document.body.style.overflowY = 'hidden';
        }}
      >
        {users[2].name}
      </StyledExecutor>
    </StyledApplicant>
  );
};

export default Executor;
