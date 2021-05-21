import React from 'react';
import {
  Field, Formik, Form,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import StyledAddForm, { StyledSubmitButton } from './styled';
import { getRequests } from '../../../../selectors/selectors';
import commentAction from '../../../../actions/commentAction';
import { StyledErrorMessage } from '../newRequestForm/styled';

const SignupSchema = Yup.object().shape({
  comment: Yup.string()
    .required('Обязательное поле'),
});

const AddCommentForm: React.FC = () => {
  const lastRequest = useSelector(getRequests)[0];
  const { addComment } = commentAction;
  const dispatch = useDispatch();

  return (
    <StyledAddForm>
      <Formik
        initialValues={{
          comment: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(value, { resetForm }) => {
          const { comment } = value;
          const { id } = lastRequest;
          dispatch(addComment({ id, comment }));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ position: 'relative' }}>
            <label htmlFor="comment">Добавление комментария </label>
            <br />
            <Field
              name="comment"
              component="textarea"
            />
            {errors.comment && touched.comment ? (
              <StyledErrorMessage>Невозможно добавить пустой комментарий</StyledErrorMessage>
            ) : null}
            <br />
            <StyledSubmitButton>Добавить</StyledSubmitButton>
          </Form>
        )}
      </Formik>
    </StyledAddForm>
  );
};

export default AddCommentForm;
