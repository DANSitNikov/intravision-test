import styled from 'styled-components';

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  
  img{
    z-index: 200;
  }
`;

export default StyledLoader;
