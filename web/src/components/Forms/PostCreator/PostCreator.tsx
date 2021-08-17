import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';

const PostCreator: React.FC = () => {
  return (
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
  );
};

export default PostCreator;
