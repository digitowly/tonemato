import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';
import { usePostCreator } from '../../../hooks/posts/usePostCreator';
import * as S from './PostCreator.style';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import { displayPostCreatorVar } from '../../../lib/apollo/cache';
import { useBackdrop } from '../../../hooks/useBackdrop';
import React from 'react';
import { H2 } from '../../Text/Headline';

const PostCreator: React.FC = () => {
  const { isAuth } = useAuth();
  const { handlePostCreate } = usePostCreator();
  const handleSubmit = ({ title, body }) => {
    handlePostCreate({ title, body });
    displayPostCreatorVar(false);
  };
  useBackdrop();
  return (
    <>
      {isAuth && (
        <S.PostCreatorWrapper>
          <S.PostCreatorHeader>
            <H2> Create Post</H2>
            <button onClick={() => displayPostCreatorVar(false)}>close</button>
          </S.PostCreatorHeader>
          <FormWrapper>
            <Formik
              initialValues={{ title: '', body: '' }}
              onSubmit={handleSubmit}>
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
