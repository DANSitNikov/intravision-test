import React from 'react';
import { useSelector } from 'react-redux';
import { getStatuses } from '../../../../../selectors/selectors';

const EditStatus: React.FC = () => {
  const statuses = useSelector(getStatuses);
  console.log(statuses);
  return (
    <select>
      status
    </select>
  );
};

export default EditStatus;
