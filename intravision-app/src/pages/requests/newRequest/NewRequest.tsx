import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledNewRequest, { StyledNewRequestCloseHeader, StyledNewRequestHeader } from './styled';
import close from '../../../assets/images/close.png';
import { getNewReqPanelStatus } from '../../../selectors/selectors';
import createNewRequestAction from '../../../actions/createNewRequsetAction';
import NewRequestForm from './form';

const NewRequest: React.FC = () => {
  const panelStatus = useSelector(getNewReqPanelStatus);
  const { changePanelStatus } = createNewRequestAction;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changePanelStatus(false));
    document.body.style.overflowY = 'auto';
  };

  return (
    <StyledNewRequest panelStatus={panelStatus}>
      <StyledNewRequestHeader>
        <p>Новая заявка</p>
        <StyledNewRequestCloseHeader onClick={handleClick}>
          <img src={close} alt="закрыть" />
        </StyledNewRequestCloseHeader>
      </StyledNewRequestHeader>
      <NewRequestForm />
    </StyledNewRequest>
  );
};

export default NewRequest;
