import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../../selectors/selectors';

const Applicant: React.FC = () => {
  const users = useSelector(getUsers);
  console.log(users);

  return (
    <div>
      заявитель
    </div>
  );
};

export default Applicant;
