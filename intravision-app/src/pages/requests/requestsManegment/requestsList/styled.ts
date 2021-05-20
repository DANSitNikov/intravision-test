import styled from 'styled-components';

const StyledRequestsList = styled.div`
  margin-top: 39px;
  margin-left: 5px;
`;

export const StyledRequestsListHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 100px 400px 100px 200px;
  position: relative;

  h3 {
    position: relative;
  }

  h3:nth-child(n + 3)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 22px;
    background-color: #e2e7ea;
  }

  h3:nth-child(n + 3) {
    padding-left: 15px;
  }

  h3 {
    color: #404147;
    font-size: 16px;
    font-weight: 400;
  }
  
  h3:last-child {
    text-align: center;
    padding: 0;
  }

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: #eef1f4;
    position: absolute;
  }

  &::after {
    bottom: 0;
  }
`;

export const StyledRequestsListContent = styled.div`
  display: grid;
  grid-template-columns: 40px 100px 400px 100px 200px;
  grid-template-rows: 54px;
  width: 100%;
  position: relative;
  padding: 2px 0;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #eef1f4;
    position: absolute;
  }

  &::after {
    bottom: 0;
  }

  p:nth-child(n + 3) {
    padding-left: 15px;
  }
  
  p:last-child {
    padding-left: 0;
    text-align: center;
  }
`;

export const StyledTaskDifficulty = styled.div`
  width: 5px;
  height: 50px;
  background: ${(props: {back: string}) => props.back};
  border-radius: 2px;
  position: relative;
`;

export default StyledRequestsList;
