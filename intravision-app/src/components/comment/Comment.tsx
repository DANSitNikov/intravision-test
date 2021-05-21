import React from 'react';
import userTemplatePhoto from '../../assets/images/userTemplatePhoto.svg';
import StyledComment from './styled';

interface PropsType {
  comment: string
}

const Comment: React.FC<PropsType> = (props) => {
  const { comment } = props;

  return (
    <StyledComment>
      <div>
        <img src={userTemplatePhoto} alt="user" />
      </div>
      <div>
        <h3>Имя Фамилия</h3>
        <p>Дата</p>
        <div>
          <p>{comment}</p>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
