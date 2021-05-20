import React from 'react';
import {
  Field, Formik, Form,
} from 'formik';
import { useDispatch } from 'react-redux';
import { postNewRequest } from '../../../../actions/createNewRequsetAction';
import { StyledSubmitButton } from '../newRequestForm/styled';

const AddCommentForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        // dispatch(postNewRequest(values));
      }}
    >
      <Form>
        <label htmlFor="name">Добавление комментария</label>
        <br />
        <Field name="name" component="textarea" />
        <br />
        <StyledSubmitButton>Сохранить</StyledSubmitButton>
      </Form>
    </Formik>
  );
};

export default AddCommentForm;
