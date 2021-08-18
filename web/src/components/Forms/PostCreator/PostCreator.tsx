import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useSecretQuery } from '../../../generated/codegen_types';

const PostCreator: React.FC = () => {
  const { data, loading, error } = useSecretQuery();

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={{ title: '', body: '' }}
        onSubmit={({ title, body }) => {}}>
        <Form>
          {data.secretConent}
          <Field type='text' name='title' />
          <Field type='text' name='body' />
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default PostCreator;
