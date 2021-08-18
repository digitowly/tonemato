import React from 'react';
import { Form, Formik } from 'formik';
import FormField from '../FormComponents/FormField/FormField';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import LinkButton from '../../Buttons/LinkButton/LinkButton';
import { useRouter } from 'next/router';
import { useLoginUserMutation } from '../../../generated/codegen_types';
import { setAccessToken } from '../../../accessToken';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();

  const handleLogin = async ({ email, password }) => {
    try {
      const result = await loginUser({
        variables: { loginEmail: email, loginPassword: password },
      });
      console.log(result);
      setAccessToken(result.data.login.accessToken);
    } catch (err) {
      console.log(err.message);
    }
  };

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
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
