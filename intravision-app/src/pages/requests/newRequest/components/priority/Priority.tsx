import React from 'react';
import { useSelector } from 'react-redux';
import { getPriorities } from '../../../../../selectors/selectors';

const Priority: React.FC = () => {
  const priorities = useSelector(getPriorities);
  console.log(priorities, 'prio');
  return (
    <div>
      priorities
    </div>
  );
};

export default Priority;
