import FormWrapper from '../FormWrapper/FormWrapper';
import { Formik, Form, Field } from 'formik';
import { useMutation } from '@apollo/client';
import CREATE_POST from '../../../graphql/mutations/CreatePost.graphql';

const PostCreator: React.FC = () => {
  const [createPost] = useMutation(CREATE_POST);
  let session = true;
  return (
    <FormWrapper>
      <Formik
        initialValues={{ title: '', body: '' }}
        onSubmit={({ title, body }) => {
          if (session) {
            createPost({
              variables: {
                title,
                body,
                author: { connect: { email: '' } },
              },
            });
          } else {
            console.log('you are not logged in');
          }
        }}>
        <Form>
          <Field type='text' name='title' />
          <Field type='text' name='body' />
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default PostCreator;
