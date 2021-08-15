import { useMutation, useQuery } from '@apollo/client';
import CREATE_USER from '../../../graphql/mutations/CreateUser.graphql';
import LIST_USERS from '../../../graphql/queries/ListUsers.graphql';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';

const RegisterForm: React.FC = () => {
  const [createUser] = useMutation(CREATE_USER);
  const { data } = useQuery(LIST_USERS);

  useEffect(() => {
    data && console.log(data.users);
  }, [data]);

  return (
    <FormWrapper>
      <h1>Register</h1>
      <Formik
        initialValues={{ username: '', email: '' }}
        onSubmit={({ username, email }) => {
          if (username && email) {
            createUser({ variables: { username, email } });
          }
        }}>
        {({ values, handleChange }) => (
          <Form>
            <Field
              value={values.username}
              onChange={handleChange}
              type='text'
              name='username'
              placeholder='username'></Field>
            <Field
              value={values.email}
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='email'></Field>
            <button type='submit'>submit</button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default RegisterForm;
