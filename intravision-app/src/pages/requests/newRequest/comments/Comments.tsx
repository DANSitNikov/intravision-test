import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../../../selectors/selectors';
import Comment from '../../../../components/comment';
import { Request } from '../../../../reducers/requestsReducer';

interface PropsTypes {
  request: Request,
}

const Comments: React.FC<PropsTypes> = (props) => {
  const { request } = props;
  const comments = useSelector(getComments).filter((comment) => comment.id === request.id);
  const reversedComments = [...comments].reverse();

  return (
    <div>
      {
        reversedComments.map((comment, i) => <Comment key={i} comment={comment.comment} />)
      }
    </div>
  );
};

export default Comments;
