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
  }
  
  button {
    margin-top: 60px;
  }
`;

export default StyledForm;
