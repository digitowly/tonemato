import { FormWrapper } from '../FormComponents/FormWrapper.style';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';
import { usePostCreator } from '../../../hooks/posts/usePostCreator';
import * as S from './PostCreator.style';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import { backdropVar, displayPostCreatorVar } from '../../../lib/apollo/cache';
import { useBackdrop } from '../../../hooks/useBackdrop';
import React, { useRef } from 'react';
import { H2 } from '../../Text/Headline';
import FormField from '../FormComponents/FormField/FormField';
import FormDropdown from '../../Dropdowns/BaseDropdown/BaseDropdown';
import InstrumentsDropdown from '../../Dropdowns/InstrumentsDropdown/InstrumentsDropdown';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import InstrumentSelector from '../InstrumentSelector/InstrumentSelector';
import GenreSelector from '../GenreSelector/GenreSelector';

const PostCreator: React.FC = () => {
    const { isAuth } = useAuth();
    const { handlePostCreate } = usePostCreator();
    const handleSubmit = ({
        title,
        body,
        lookingFor,
        reason,
        preferredInstruments,
        preferredGenres,
    }) => {
        handlePostCreate({
            title,
            body,
            instrumentIds: preferredInstruments,
            genreIds: preferredGenres,
        });
        displayPostCreatorVar(false);
        console.log(title, body, lookingFor, reason);
    };
    const postCreatorRef = useRef(null);
    useBackdrop();
    useDetectOutsideClick(postCreatorRef, () => {
        // displayPostCreatorVar(false);
        // backdropVar(false);
    });
    return (
        <>
            {isAuth && (
                <S.PostCreatorWrapper ref={postCreatorRef}>
                    <S.PostCreatorHeader>
                        <H2> Create Post</H2>
                        <button onClick={() => displayPostCreatorVar(false)}>
                            close
                        </button>
                    </S.PostCreatorHeader>
                    <FormWrapper>
                        <Formik
                            initialValues={{
                                title: '',
                                body: '',
                                lookingFor: 'default',
                                reason: 'jamming',
                                preferredInstruments: [],
                                preferredGenres: [],
                            }}
                            onSubmit={handleSubmit}>
                            {({ values, handleChange, setFieldValue }) => (
                                <Form>
                                    <p>I am a ... looking for ...</p>
                                    <InstrumentSelector
                                        onSubmit={async ids => {
                                            setFieldValue(
                                                'preferredInstruments',
                                                ids
                                            );
                                        }}
                                        instrumentsData={[]}
                                    />
                                    <GenreSelector
                                        onSubmit={async ids => {
                                            setFieldValue(
                                                'preferredGenres',
                                                ids
                                            );
                                        }}
                                        genreData={[]}
                                    />
                                    {/* <FormDropdown
                    name='reason'
                    options={['jamming', 'teaching', 'test 3']}
                  /> */}
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
                                    {/* <PrimaryButton type='submit' label='submit' /> */}
                                    <button type='submit'>submit</button>
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
