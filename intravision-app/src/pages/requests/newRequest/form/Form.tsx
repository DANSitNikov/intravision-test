import React from 'react';
import { useFormik } from 'formik';
import StyledForm from './styled';

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Название</label>
        <br />
        <textarea
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor="description">Описание</label>
        <br />
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </StyledForm>
  );
};

export default Form;
