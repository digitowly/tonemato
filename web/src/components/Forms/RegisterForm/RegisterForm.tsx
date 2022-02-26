import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { FormWrapper } from '../FormComponents/FormWrapper.style';
import {
    useCreateNewUserMutation,
    useListUsersQuery,
} from '../../../generated/codegen_types';

const RegisterForm: React.FC = () => {
    const [createUser] = useCreateNewUserMutation();
    const { data } = useListUsersQuery();

    useEffect(() => {
        data && console.log(data.users);
    }, [data]);

    return (
        <FormWrapper>
            <h1>Register</h1>
            <Formik
                initialValues={{ password: '', email: '', username: '' }}
                onSubmit={({ password, email, username }) => {
                    if (password && email) {
                        console.log(password, email);
                        createUser({
                            variables: {
                                registerEmail: email,
                                registerPassword: password,
                                registerUsername: username,
                            },
                        });
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
                        <Field
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='password'></Field>
                        <button type='submit'>submit</button>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default RegisterForm;
