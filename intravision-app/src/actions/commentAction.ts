import { Comment } from '../reducers/commentReducer';

const commentAction = {
  addComment: (comment: Comment) => ({
    type: 'ADD_COMMENT',
    comment,
  }) as const,
};

export default commentAction;
