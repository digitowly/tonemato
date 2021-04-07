import { Formik, Form, Field } from 'formik';
import FormWrapper from '../Forms/FormWrapper/FormWrapper';
import styles from './PostsFilter.module.scss';

const PostsFilter: React.FC = () => {
  return (
    <div>
      <h1>Search</h1>
      <FormWrapper>
        <div className={styles['posts-filter']}>
          <Formik
            initialValues={{ instrument: 'guitar' }}
            onSubmit={(values) => console.log(values)}>
            <Form>
              <Field type='text' name='instrument' />
            </Form>
          </Formik>
        </div>
      </FormWrapper>
    </div>
  );
};

export default PostsFilter;
