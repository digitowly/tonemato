import React from 'react';
import { Form, Formik } from 'formik';
import FormField from '../FormComponents/FormField/FormField';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import LinkButton from '../../Buttons/LinkButton/LinkButton';
import { useRouter } from 'next/router';
import { useLogin } from '../../../hooks/auth/useLogin';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { handleLogin, isLoading } = useLogin();

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
      {({ values, handleChange }) => (
        <Form>
          <FormField
            id='login-email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <FormField
            id='login-password'
            name='password'
            type='password'
            value={values.password}
            onChange={handleChange}
          />
          <PrimaryButton label='login' type='submit' />
          <LinkButton
            label='sign up'
            onClick={() => router.push('/register')}
          />
          {isLoading && <p>loading</p>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
