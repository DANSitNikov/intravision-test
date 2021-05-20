import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';

const Creator: React.FC = () => {
  const users = useSelector(getUsers);

  return (
    <StyledApplicant>
      <p>Создана</p>
      <h4>{users[1].name}</h4>
    </StyledApplicant>
  );
};

export default Creator;
