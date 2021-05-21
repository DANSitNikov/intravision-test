import styled from 'styled-components';

const StyledChoosePerson = styled.div`
  position: fixed;
  visibility: ${(props: {status: boolean}) => (props.status ? 'visible' : 'hidden')} !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const StyledInsidePerson = styled.div`
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 10px;
  overflow-y: auto;
  color: white !important;
`;

export const StyledInput = styled.div`
  background-color: #d1e0ed;  height: 50px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #42aaff;
    padding-left: 10px;
    outline: none;
  }
`;

export const StyledClose = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const StyledPersonWrapper = styled.div`
  background-color: #42aaff;
`;

export const StyledPerson = styled.div`
  height: 40px;
  padding-top: 10px;
  padding-left: 30px;
  border-bottom: 2px solid black;
  
  p{
    margin: 0;
    font-size: 16px;
    transition: all 0.3s;
    color: white !important;
  }
  
  &:hover{
    cursor: pointer;
    
    p{
      font-size: 18px; 
    }
  }
`;

export default StyledChoosePerson;
