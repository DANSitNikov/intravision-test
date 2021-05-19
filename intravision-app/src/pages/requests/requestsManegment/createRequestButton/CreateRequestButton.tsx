import React from 'react';
import { useDispatch } from 'react-redux';
import StyledRequestButton from './styled';
import createNewRequestAction from '../../../../actions/createNewRequsetAction';

const CreateRequestButton: React.FC = () => {
  const { changePanelStatus } = createNewRequestAction;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changePanelStatus(true));
    document.body.style.overflowY = 'hidden';
  };

  return (
    <StyledRequestButton onClick={handleClick}>
      Создать заявку
    </StyledRequestButton>
  );
};

export default CreateRequestButton;
