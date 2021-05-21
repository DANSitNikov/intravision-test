import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPriorities } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledPriority, { StyledSelectPriority } from './styled';

const Priority: React.FC = () => {
  const priorities = useSelector(getPriorities);
  const [choosePriorityBlockStatus, setChoosePriorityBlockStatus] = useState(false);

  return (
    <StyledApplicant>
      <p>Приоритет</p>
      <StyledPriority
        onClick={() => setChoosePriorityBlockStatus(!choosePriorityBlockStatus)}
      >
        {priorities[0].name}
      </StyledPriority>
      <StyledSelectPriority status={choosePriorityBlockStatus}>
        {
          priorities.map((priority) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <p
                key={priority.id}
                onClick={() => setChoosePriorityBlockStatus(!choosePriorityBlockStatus)}
              >
                {priority.name}
              </p>
            );
          })
        }
      </StyledSelectPriority>
    </StyledApplicant>
  );
};

export default Priority;
