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
import FormField from '../FormComponents/FormField/FormField';
import FormDropdown from '../FormComponents/FormDropdown/FormDropdown';

const PostCreator: React.FC = () => {
  const { isAuth } = useAuth();
  const { handlePostCreate } = usePostCreator();
  const handleSubmit = ({ title, body, lookingFor, reason }) => {
    // handlePostCreate({ title, body });
    // displayPostCreatorVar(false);
    console.log(title, body, lookingFor, reason);
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
              initialValues={{
                title: '',
                body: '',
                lookingFor: 'default',
                reason: 'jamming',
              }}
              onSubmit={handleSubmit}>
              {({ values, handleChange }) => (
                <Form>
                  <p>I am a ... looking for ...</p>
                  <FormDropdown
                    name='lookingFor'
                    options={['bass', 'guitar', 'piano']}
                  />
                  <FormDropdown
                    name='reason'
                    options={['jamming', 'teaching', 'test 3']}
                  />
                  <FormField
                    id='post-title'
                    type='text'
                    name='title'
                    value={values.title}
                    fieldType='natural'
                    placeholder='Catchy title...'
                    onChange={handleChange}
                  />
                  <FormField
                    id='post-body'
                    as='textarea'
                    type='text'
                    name='body'
                    value={values.body}
                    fieldType='natural'
                    placeholder='Write a bit about yourself and what you are looking for...'
                    onChange={handleChange}
                  />
                  <PrimaryButton type='submit' label='submit' />
                </Form>
              )}
            </Formik>
          </FormWrapper>
        </S.PostCreatorWrapper>
      )}
    </>
  );
};

export default PostCreator;
