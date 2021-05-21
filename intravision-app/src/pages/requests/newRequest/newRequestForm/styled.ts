import styled from 'styled-components';

const StyledForm = styled.div`
  margin-top: 30px;
  padding: 0 40px 40px 40px;

  label{
    color: #9f9ea7;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  
  textarea {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 600px;
    height: 150px;
    resize: vertical;
    outline: none;
  }
`;

export const StyledSubmitButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #008cf0;
  color: white;
  outline: none;
  transition: all 0.3s;
  margin-top: 30px;
  margin-bottom: 50px;

  &:hover {
    cursor: pointer;
    background-color: #017dd4;
  }
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  top: 0;
  left: 230px;
  color: red;
`;

export default StyledForm;
