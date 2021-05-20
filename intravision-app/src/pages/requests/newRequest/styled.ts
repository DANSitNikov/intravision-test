import styled from 'styled-components';

const StyledNewRequest = styled.div`
  position: fixed;
  width: 975px;
  background-color: #ecf3f7;
  top: 65px;
  transition: all -0.3s;
  right: ${(props: {panelStatus: boolean}) => (props.panelStatus ? 0 : -975)}px;
  height: ${(props: {panelStatus: boolean}) => (props.panelStatus ? 100 : 0)}%;
  overflow-y: auto;
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
    color: white;
  }
`;

export const StyledNameRequest = styled.p`
  font-size: 16px !important;
  max-width: 600px;
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

export const StyledEditPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledMainContent = styled.div`
  padding: 39px;
`;

export const StyledChangeParametersBlock = styled.div`
  padding: 39px;
`;

export const StyledBorder = styled.div`
  width: 2px;
  background-color: #d7dce0 !important;
`;

export default StyledNewRequest;
