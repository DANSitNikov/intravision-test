import React, { useState } from 'react';
import SearchRequest from './searchRequest';
import RequestsManagement from './requestsManegment';
import NewRequest from './newRequest';
import StyledRequests from './styled';

const Requests: React.FC = () => (
  <StyledRequests>
    <SearchRequest />
    <RequestsManagement />
    <NewRequest />
  </StyledRequests>
);

export default Requests;
