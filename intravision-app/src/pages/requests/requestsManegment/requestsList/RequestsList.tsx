import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRequestsList, {
  StyledRequestsListContent,
  StyledRequestsListHeader, StyledStatusName,
  StyledTaskDifficulty,
} from './styled';
import { getNewReqAddedStatus, getRequests } from '../../../../selectors/selectors';
import Loader from '../../../../components/loader';
import { getAllRequests } from '../../../../actions/requestsAction';

const RequestsList: React.FC = () => {
  const allRequests = useSelector(getRequests);
  const addedStatus = useSelector(getNewReqAddedStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allRequests.length === 0) {
      dispatch(getAllRequests());
    }
  }, []);

  return (
    <>
      {
        (allRequests.length === 0 || !addedStatus)
          && <Loader />
      }
      <StyledRequestsList>
        <StyledRequestsListHeader>
          <p />
          <h3>ID</h3>
          <h3>Название</h3>
          <h3 style={{ width: '100px' }}>Статус</h3>
          <h3>Исполнитель</h3>
        </StyledRequestsListHeader>
        {
          allRequests.map((request) => {
            return (
              <StyledRequestsListContent key={request.id}>
                <StyledTaskDifficulty back={request.statusRgb} />
                <p>{request.id}</p>
                <p>{request.name}</p>
                <StyledStatusName color={request.statusRgb}>{request.statusName}</StyledStatusName>
                <p>{request.executorName}</p>
              </StyledRequestsListContent>
            );
          })
        }
      </StyledRequestsList>
    </>
  );
};

export default RequestsList;
