import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';
import StyledApplicant from './styled';

const Applicant: React.FC = () => {
  const users = useSelector(getUsers);

  return (
    <StyledApplicant>
      <p>Заявитель</p>
      <h4>{users[0].name}</h4>
    </StyledApplicant>
  );
};

export default Applicant;
