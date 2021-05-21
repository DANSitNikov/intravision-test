import styled from 'styled-components';

const StyledPriority = styled.h4`
  color: dodgerblue !important;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`;

export const StyledSelectPriority = styled.div`
  display: ${(props: {status: boolean}) => (props.status ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  background-color: white;
  z-index: 10;
  width: 150px;
  padding: 5px;
  
  p{
    color: black;
    margin: 0;
    
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default StyledPriority;
