import React from 'react';
import userTemplatePhoto from '../../assets/images/userTemplatePhoto.svg';
import StyledComment from './styled';

const Comment: React.FC = () => {
  console.log('one');

  return (
    <StyledComment>
      <div>
        <img src={userTemplatePhoto} alt="user" />
      </div>
      <div>
        <h3>Имя</h3>
        <p>да</p>
        <div>
          <p>Комментарий</p>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
