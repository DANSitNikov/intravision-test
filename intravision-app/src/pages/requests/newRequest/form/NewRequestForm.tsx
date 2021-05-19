import React from 'react';
import {
  Field,
  Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import StyledForm, { StyledSubmitButton } from './styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле'),
  description: Yup.string()
    .min(20, 'Минимум 20 символов')
    .required('Обязательное поле'),
});

const NewRequestForm: React.FC = () => {
  console.log('form');

  return (
    <StyledForm>
      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Название</label>
            <br />
            <Field name="name" component="textarea" />
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
            <br />
            <label htmlFor="description">Описание</label>
            <br />
            <Field name="description" component="textarea" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <br />
            <StyledSubmitButton>Сохранить</StyledSubmitButton>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default NewRequestForm;
