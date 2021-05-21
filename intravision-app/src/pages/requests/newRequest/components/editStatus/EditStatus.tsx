import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getStatuses } from '../../../../../selectors/selectors';
import StyledEditStatus, { StyledSelectList, StyledStatus, StyledStatusHeader } from './styled';
import { Status } from '../../../../../reducers/requestParametersReducer';
import { ChangeRequestParameters } from '../../NewRequest';

interface PropsType {
  setParameters: (arg: ChangeRequestParameters) => void,
  parameters: ChangeRequestParameters,

}

const EditStatus: React.FC<PropsType> = (props) => {
  const { parameters, setParameters } = props;
  const statuses = useSelector(getStatuses);
  const [listStatus, setListStatus] = useState(false);

  return (
    <StyledEditStatus>
      <StyledStatusHeader>
        Статус
      </StyledStatusHeader>
      <StyledStatus
        color={parameters.statusRgb}
        onClick={() => {
          setListStatus(!listStatus);
        }}
      >
        {parameters.statusName}
      </StyledStatus>
      <StyledSelectList status={listStatus}>
        {
          statuses.map((status: Status) => {
            return (
              <StyledStatus
                color={status.rgb}
                onClick={() => {
                  setListStatus(false);
                  setParameters({
                    ...parameters,
                    statusId: status.id,
                    statusName: status.name,
                    statusRgb: status.rgb,
                  });
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
