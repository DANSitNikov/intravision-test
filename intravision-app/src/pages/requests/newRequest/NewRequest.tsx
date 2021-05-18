import React from 'react';
import StyledNewRequest, { StyledNewRequestCloseHeader, StyledNewRequestHeader } from './styled';
import close from '../../../assets/images/close.png';
import Form from './form';

const NewRequest: React.FC = () => (
  <StyledNewRequest>
    <StyledNewRequestHeader>
      <p>Новая заявка</p>
      <StyledNewRequestCloseHeader>
        <img src={close} alt="закрыть" />
      </StyledNewRequestCloseHeader>
    </StyledNewRequestHeader>
    <Form />
  </StyledNewRequest>
);

export default NewRequest;
