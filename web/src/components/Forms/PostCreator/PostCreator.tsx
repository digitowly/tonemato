import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';

const PostCreator: React.FC = () => {
  const { isAuth } = useAuth();
  return (
    <>
      {isAuth && (
        <FormWrapper>
          <Formik
            initialValues={{ title: '', body: '' }}
            onSubmit={({ title, body }) => {}}>
            <Form>
              <Field type='text' name='title' />
              <Field type='text' name='body' />
              <button type='submit'>submit</button>
            </Form>
          </Formik>
        </FormWrapper>
      )}
    </>
  );
};

export default PostCreator;
