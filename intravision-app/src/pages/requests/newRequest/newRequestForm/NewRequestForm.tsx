import React from 'react';
import {
  Field,
  Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import StyledForm, { StyledErrorMessage, StyledSubmitButton } from './styled';
import createNewRequestAction, { postNewRequest } from '../../../../actions/createNewRequsetAction';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле'),
  description: Yup.string()
    .required('Обязательное поле'),
});

const NewRequestForm: React.FC = () => {
  const { changeEditPanelStatus } = createNewRequestAction;
  const dispatch = useDispatch();

  return (
    <StyledForm>
      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(changeEditPanelStatus(true));
          dispatch(postNewRequest(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div style={{ position: 'relative' }}>
              <label htmlFor="name">Название</label>
              <br />
              <Field
                name="name"
                component="textarea"
                style={
                  errors.name && touched.name ? { borderColor: 'red' } : null
                }
              />
              {errors.name && touched.name ? (
                <StyledErrorMessage>{errors.name}</StyledErrorMessage>
              ) : null}
            </div>
            <br />
            <div style={{ position: 'relative' }}>
              <label htmlFor="description">Описание</label>
              <br />
              <Field
                name="description"
                component="textarea"
                style={
                  errors.description && touched.description ? { borderColor: 'red' } : null
                }
              />
              {errors.description && touched.description ? (
                <StyledErrorMessage>{errors.description}</StyledErrorMessage>
              ) : null}
            </div>
            <br />
            <StyledSubmitButton>Сохранить</StyledSubmitButton>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default NewRequestForm;
