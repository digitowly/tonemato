import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';
import { usePostCreator } from '../../../hooks/posts/usePostCreator';
import * as S from './PostCreator.style';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import { displayPostCreatorVar } from '../../../lib/apollo/cache';
import { useBackdrop } from '../../../hooks/useBackdrop';

const PostCreator: React.FC = () => {
  const { isAuth } = useAuth();
  const { handlePostCreate } = usePostCreator();

  useBackdrop();
  return (
    <>
      {isAuth && (
        <S.PostCreatorWrapper>
          <button onClick={() => displayPostCreatorVar(false)}>close</button>
          <FormWrapper>
            <Formik
              initialValues={{ title: '', body: '' }}
              onSubmit={handlePostCreate}>
              <Form>
                <Field type='text' name='title' placeholder='new post' />
                <Field type='text' name='body' />
                <PrimaryButton type='submit' label='submit' />
              </Form>
            </Formik>
          </FormWrapper>
        </S.PostCreatorWrapper>
      )}
    </>
  );
};

export default PostCreator;
