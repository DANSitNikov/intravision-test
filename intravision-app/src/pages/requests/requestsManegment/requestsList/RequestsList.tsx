import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRequestsList, {
  StyledRequestsListHeader,
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
          {
            allRequests.map((request) => {
              return (
                <StyledRequestsListHeader key={request.id}>
                  <p />
                  <h3>{request.id}</h3>
                  <h3>{request.name}</h3>
                  <h3>{request.statusName}</h3>
                  <h3>{request.executorName}</h3>
                </StyledRequestsListHeader>
              );
            })
          }
        </StyledRequestsList>
      )
  );
};

export default RequestsList;
