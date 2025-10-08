import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// 1. Define the Validation Schema using Yup
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username is required'), // Basic non-empty validation

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'), // Basic non-empty validation

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'), // Basic non-empty validation
});

const FormikForm = () => {
  const [success, setSuccess] = useState('');
  
  // 2. Define Initial Values for Formik
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // 3. Define the Submission Handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // This is where you would send data to the mock API
    console.log('Formik Form Data:', values);

    // Simulate an API call delay
    setTimeout(() => {
      setSubmitting(false);
      setSuccess('Registration successful (Formik Component)!');
      resetForm(); // Reset the form after successful submission
    }, 500);
  };

  return (
    <div className="form-container">
      <h2>Formik Component Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema} // Connects Yup schema to Formik
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div>
              <label htmlFor="username">Username:</label>
              <Field name="username" type="text" />
              {/* Display validation error */}
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default FormikForm;