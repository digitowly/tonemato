import { Formik, Form, Field } from 'formik';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
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
              <Field name='instrument' as='select'>
                <option value='guitar'>Guitar</option>
                <option value='drums'>Drums</option>
                <option value='bass'>Bass</option>
              </Field>
              <SubmitButton value='submit' />
            </Form>
          </Formik>
        </div>
      </FormWrapper>
    </div>
  );
};

export default PostsFilter;
