import React from 'react';
import StyledRequestsList, {
  StyledRequestsListHeader,
  StyledRequestsListContent,
  StyledTaskDifficulty,
} from './styled';

const RequestsList: React.FC = () => (
  <StyledRequestsList>
    <StyledRequestsListHeader>
      <p />
      <h3>ID</h3>
      <h3>Название</h3>
      <h3>Статус</h3>
      <h3>Исполнитель</h3>
    </StyledRequestsListHeader>
    <StyledRequestsListContent>
      <StyledTaskDifficulty />
      <p>50501</p>
      <p>text</p>
      <p>status</p>
      <p>who</p>
    </StyledRequestsListContent>
    <StyledRequestsListContent>
      <StyledTaskDifficulty />
      <p>50501</p>
      <p>text</p>
      <p>status</p>
      <p>who</p>
    </StyledRequestsListContent>
    <StyledRequestsListContent>
      <StyledTaskDifficulty />
      <p>50501</p>
      <p>text</p>
      <p>status</p>
      <p>who</p>
    </StyledRequestsListContent>
    <StyledRequestsListContent>
      <StyledTaskDifficulty />
      <p>50501</p>
      <p>text</p>
      <p>status</p>
      <p>who</p>
    </StyledRequestsListContent>
  </StyledRequestsList>
);

export default RequestsList;
