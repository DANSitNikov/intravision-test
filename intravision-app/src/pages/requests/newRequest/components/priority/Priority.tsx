import React from 'react';
import { useSelector } from 'react-redux';
import { getPriorities } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledPriority from './styled';

const Priority: React.FC = () => {
  const priorities = useSelector(getPriorities);
  console.log(priorities);
  return (
    <StyledApplicant>
      <p>Приоритет</p>
      <StyledPriority>{priorities[0].name}</StyledPriority>
    </StyledApplicant>
  );
};

export default Priority;
