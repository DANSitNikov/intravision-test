import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';

const Executor: React.FC = () => {
  const users = useSelector(getUsers);

  return (
    <div>
      executor
    </div>
  );
};

export default Executor;
