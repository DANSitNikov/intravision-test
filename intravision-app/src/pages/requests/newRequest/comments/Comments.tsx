import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../../../selectors/selectors';
import Comment from '../../../../components/comment';

const Comments: React.FC = () => {
  const comments = useSelector(getComments);
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
