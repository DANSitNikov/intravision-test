import React from 'react';
import CreateRequestButton from './createRequestButton';
import RequestsList from './requestsList';

const RequestsManagement: React.FC = () => (
  <div>
    <CreateRequestButton />
    <RequestsList />
  </div>
);

export default RequestsManagement;
