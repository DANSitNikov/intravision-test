import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchRequest from './searchRequest';
import RequestsManagement from './requestsManegment';
import NewRequest from './newRequest';
import StyledRequests from './styled';
import { statusesRequest, prioritiesRequest, usersRequest } from '../../actions/requestParametersAction';

const Requests: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statusesRequest());
    dispatch(prioritiesRequest());
    dispatch(usersRequest());
  }, []);

  return (
    <StyledRequests>
      <SearchRequest />
      <RequestsManagement />
      <NewRequest />
    </StyledRequests>
  );
};

export default Requests;
