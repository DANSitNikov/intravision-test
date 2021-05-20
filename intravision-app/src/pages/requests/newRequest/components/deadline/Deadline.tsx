import React from 'react';
import StyledApplicant from '../applicant/styled';
import calendar from '../../../../../assets/images/calendar.png';

const Deadline: React.FC = () => {
  return (
    <StyledApplicant>
      <p>Срок</p>
      <div>
        <img src={calendar} alt="календарь" />
        <span style={{ marginLeft: '10px' }}>12.11.2018 г.</span>
      </div>
    </StyledApplicant>
  );
};

export default Deadline;
