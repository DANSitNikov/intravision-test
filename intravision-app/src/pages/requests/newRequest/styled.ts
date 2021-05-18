import styled from 'styled-components';

const StyledNewRequest = styled.div`
  width: 975px;
  background-color: #ecf3f7;
  position: absolute;
  top: 65px;
  right: -975px;
`;

export const StyledNewRequestHeader = styled.div`
  min-height: 60px;
  width: 100%;
  background-color: #1a4876;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const StyledNewRequestCloseHeader = styled.button`
  width: 16px;
  height: 16px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a4876;
  
  &:hover {
    cursor: pointer;
  }
`;

export default StyledNewRequest;
