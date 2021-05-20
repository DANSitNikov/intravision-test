import styled from 'styled-components';

const StyledMenu = styled.div`
  min-height: 100vh;
  background: #002137;
  z-index: ${(props: {status: boolean}) => (props.status ? 0 : 200)} !important;
  
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 7px;
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
    padding: 12px;
  }
`;

export const StyledCompanyLogo = styled.img`
  width: 54px;
  height: 44px;
  margin: 0 auto;
`;

export const StyledKnowledgeBase = styled.img`
  width: 22px;
  height: 26px;
  margin: 0 auto;
`;

export const StyledRequest = styled.img`
  width: 18px;
  height: 24px;
  margin: 0 auto;
`;

export const StyledEmployees = styled.img`
  width: 25px;
  height: 17px;
  margin: 0 auto;
`;

export const StyledClients = styled.img`
  width: 25px;
  height: 26px;
  margin: 0 auto;
`;

export const StyledAssets = styled.img`
  width: 26px;
  height: 24px;
  margin: 0 auto;
`;

export const StyledSettings = styled.img`
  width: 25px;
  height: 24px;
  margin: 0 auto;
`;

export default StyledMenu;
