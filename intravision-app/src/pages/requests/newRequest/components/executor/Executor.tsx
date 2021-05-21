import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';
import StyledApplicant from '../applicant/styled';
import StyledExecutor from './styled';
import choosePersonAction from '../../../../../actions/choosePersonAction';
import { ChangeRequestParameters } from '../../NewRequest';
import ChoosePerson from '../../../../../components/choosePerson/ChoosePerson';

interface PropsType {
  setParameters: (arg: ChangeRequestParameters) => void,
  parameters: ChangeRequestParameters,
}

const Executor: React.FC<PropsType> = (props) => {
  const { setParameters, parameters } = props;
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
        {parameters.executorName}
      </StyledExecutor>
      <ChoosePerson setParameters={setParameters} parameters={parameters} />
    </StyledApplicant>
  );
};

export default Executor;
