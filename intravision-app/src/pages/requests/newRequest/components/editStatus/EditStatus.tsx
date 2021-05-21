import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getStatuses } from '../../../../../selectors/selectors';
import StyledEditStatus, { StyledSelectList, StyledStatus, StyledStatusHeader } from './styled';
import { Status } from '../../../../../reducers/requestParametersReducer';

const EditStatus: React.FC = () => {
  const statuses = useSelector(getStatuses);
  const [activeStatus, setActiveStatus] = useState<Status>(statuses[0]);
  const [listStatus, setListStatus] = useState(false);

  return (
    <StyledEditStatus>
      <StyledStatusHeader>
        Статус
      </StyledStatusHeader>
      <StyledStatus
        color={activeStatus.rgb}
        onClick={() => setListStatus(!listStatus)}
      >
        {activeStatus.name}
      </StyledStatus>
      <StyledSelectList status={listStatus}>
        {
          statuses.map((status: Status) => {
            return (
              <StyledStatus
                color={status.rgb}
                onClick={() => {
                  setActiveStatus(status);
                  setListStatus(false);
                }}
                key={status.id}
              >
                {status.name}
              </StyledStatus>
            );
          })
        }
      </StyledSelectList>
    </StyledEditStatus>
  );
};

export default EditStatus;
