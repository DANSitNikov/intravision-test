import styled from 'styled-components';

const StyledEditStatus = styled.div`
  width: 150px;
  position: relative;
`;

export const StyledStatus = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: ${(props: {color: string}) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  
  &:hover{
    font-size: 17px;
  }
`;

export const StyledStatusHeader = styled.p`
  height: 20px;
  margin-bottom: 10px;
  padding-left: 10px;
  margin-top: 0;
  color: #a09fa8;
  font-size: 16px;
`;

export const StyledSelectList = styled.div`
  position: absolute;
  top: 70px;
  display: ${(props: {status: boolean}) => (props.status ? 'block' : 'none')};
  cursor: pointer;
`;

export default StyledEditStatus;
