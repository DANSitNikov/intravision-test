import styled from 'styled-components';

const StyledAddForm = styled.div`
  textarea{
      margin-top: 20px;
      margin-bottom: 30px;
      width: 650px;
      height: 150px;
      resize: vertical;
      outline: none;
  }
  
  label{
    color: #a09fa8;
    font-size: 16px;
  }
`;

export const StyledSubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #008cf0;
  color: white;
  outline: none;
  transition: all 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: #017dd4;
  }
`;

export default StyledAddForm;
