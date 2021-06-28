import { Formik, Form, Field } from 'formik';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import FormWrapper from '../Forms/FormWrapper/FormWrapper';
import * as S from './PostsFilter.style';

const PostsFilter: React.FC = () => {
  return (
    <div>
      <h1>Search</h1>
      <FormWrapper>
        <S.FilterWrapper>
          <Formik
            initialValues={{ instrument: 'guitar' }}
            onSubmit={(values) => console.log(values)}>
            <Form>
              <Field name='instrument' as='select'>
                <option value='guitar'>Guitar</option>
                <option value='drums'>Drums</option>
                <option value='bass'>Bass</option>
              </Field>
              <SecondaryButton label='submit' />
            </Form>
          </Formik>
        </S.FilterWrapper>
      </FormWrapper>
    </div>
  );
};

export default PostsFilter;
