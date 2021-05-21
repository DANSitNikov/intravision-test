import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPriorities } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledPriority, { StyledSelectPriority } from './styled';
import { ChangeRequestParameters } from '../../NewRequest';

interface PropsType {
  setParameters: (arg: ChangeRequestParameters) => void,
  parameters: ChangeRequestParameters,
}

const Priority: React.FC<PropsType> = (props) => {
  const { setParameters, parameters } = props;
  const priorities = useSelector(getPriorities);
  const [choosePriorityBlockStatus, setChoosePriorityBlockStatus] = useState(false);

  return (
    <StyledApplicant>
      <p>Приоритет</p>
      <StyledPriority
        onClick={() => setChoosePriorityBlockStatus(!choosePriorityBlockStatus)}
      >
        {parameters.priorityName}
      </StyledPriority>
      <StyledSelectPriority status={choosePriorityBlockStatus}>
        {
          priorities.map((priority) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <p
                key={priority.id}
                onClick={() => {
                  setChoosePriorityBlockStatus(!choosePriorityBlockStatus);
                  setParameters({
                    ...parameters,
                    priorityId: priority.id,
                    priorityName: priority.name,
                  });
                }}
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
