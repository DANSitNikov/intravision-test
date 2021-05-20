import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRequestsList, {
  StyledRequestsListContent,
  StyledRequestsListHeader,
  StyledTaskDifficulty,
} from './styled';
import { getRequests } from '../../../../selectors/selectors';
import Loader from '../../../../components/loader';
import { getAllRequests } from '../../../../actions/requestsAction';

const RequestsList: React.FC = () => {
  const allRequests = useSelector(getRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allRequests.length === 0) {
      dispatch(getAllRequests());
    }
  }, []);

  return (
    allRequests.length === 0
      ? <Loader />
      : (
        <StyledRequestsList>
          <StyledRequestsListHeader>
            <p />
            <h3>ID</h3>
            <h3>Название</h3>
            <h3>Статус</h3>
            <h3>Исполнитель</h3>
          </StyledRequestsListHeader>
          {
            allRequests.map((request) => {
              return (
                <StyledRequestsListContent key={request.id}>
                  <StyledTaskDifficulty back={request.statusRgb} />
                  <p>{request.id}</p>
                  <p>{request.name}</p>
                  <p>{request.statusName}</p>
                  <p>{request.executorName}</p>
                </StyledRequestsListContent>
              );
            })
          }
        </StyledRequestsList>
      )
  );
};

export default RequestsList;
