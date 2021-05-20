import styled from 'styled-components';

const StyledRequestButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #008cf0;
  color: white;
  outline: none;
  transition: all 0.3s;
  margin: 90px 0 0 262px;

  &:hover {
    cursor: pointer;
    background-color: #017dd4;
  }
`;

export default StyledRequestButton;
