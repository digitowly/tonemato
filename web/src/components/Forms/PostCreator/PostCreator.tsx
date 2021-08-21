import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';
import { usePostCreator } from '../../../hooks/posts/usePostCreator';

const PostCreator: React.FC = () => {
  const { isAuth } = useAuth();
  const { handlePostCreate } = usePostCreator();
  return (
    <>
      {isAuth && (
        <FormWrapper>
          <Formik
            initialValues={{ title: '', body: '' }}
            onSubmit={handlePostCreate}>
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
