import { Formik, Form } from 'formik';
import { useAuth } from '../../../hooks/auth/useAuth';
import { usePostCreator } from '../../../hooks/posts/usePostCreator';
import * as S from './PostCreator.style';
import { backdropVar, displayPostCreatorVar } from '../../../lib/apollo/cache';
import { useBackdrop } from '../../../hooks/useBackdrop';
import React, { useRef } from 'react';
import { H2 } from '../../Text/Headline';
import FormField from '../FormComponents/FormField/FormField';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import InstrumentSelector from '../InstrumentSelector/InstrumentSelector';
import GenreSelector from '../GenreSelector/GenreSelector';
import LoginPromptModal from '../../Modal/Presets/LoginPromptModal/LoginPromptModal';
import Modal from '../../Modal/Modal';
import { Colors } from '../../../styles/Colors';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import CrossIcon from '../../../icons/ui/CrossIcon';
import CrossButton from '../../Buttons/CloseButton/CrossButton';

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
            instrumentIds: preferredInstruments.map(inst => inst.id),
            genreIds: preferredGenres.map(genre => genre.id),
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
            {isAuth ? (
                <Modal
                    title='Create Post'
                    titleColor={Colors.hendrix}
                    closeModal={() => displayPostCreatorVar(false)}>
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
                        {({ values, handleChange }) => (
                            <Form>
                                <S.PostCreatorFormWrapper>
                                    <S.PostCreatorFormSection>
                                        <S.PostCreatorFormElement>
                                            <S.PostCreatorFormElementLabel>
                                                <p>I play</p>
                                            </S.PostCreatorFormElementLabel>
                                            <InstrumentSelector
                                                name='preferredInstruments'
                                                instrumentsData={[
                                                    { id: 2, name: 'bass' },
                                                ]}
                                            />
                                        </S.PostCreatorFormElement>
                                        <S.PostCreatorFormElement>
                                            <S.PostCreatorFormElementLabel>
                                                <p>Genres</p>
                                            </S.PostCreatorFormElementLabel>
                                            <GenreSelector
                                                name='preferredGenres'
                                                genreData={[]}
                                            />
                                        </S.PostCreatorFormElement>
                                    </S.PostCreatorFormSection>
                                    <S.PostCreatorFormSection>
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
                                    </S.PostCreatorFormSection>
                                </S.PostCreatorFormWrapper>
                                <S.PostCreatorFooter>
                                    <PrimaryButton
                                        type='submit'
                                        label='create'
                                    />
                                </S.PostCreatorFooter>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            ) : (
                <LoginPromptModal />
            )}
        </>
    );
};

export default PostCreator;
