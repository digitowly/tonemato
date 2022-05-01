import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import InstrumentSelector from '../components/Forms/InstrumentSelector/InstrumentSelector';
import PostTile, { PostTileType } from '../components/PostTile/PostTile';
import { ProfileWrapper } from '../components/Profile/Profile.style';
import ProfileSection, {
    ProfileSectionInput,
} from '../components/Profile/ProfileSection';
import { H1 } from '../components/Text/Headline';
import {
    useUpdateUsernameMutation,
    useUserProfileQuery,
} from '../generated/codegen_types';
import { useUpdateInstruments } from '../hooks/user/useUpdateInstruments';

const MePage: React.FC = () => {
    const { data, error, loading } = useUserProfileQuery();
    const [updateUsername] = useUpdateUsernameMutation();
    const { handleUpdateInstruments } = useUpdateInstruments();

    const [newNameInput, setNewNameInput] = useState('');

    const handleUpdateUsername = async () => {
        try {
            await updateUsername({
                variables: {
                    newUsername: newNameInput,
                    userId: data.authedUser.id,
                },
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    error && console.log(error);

    if (loading) return <p>loading</p>;

    if (data.authedUser)
        return (
            <>
                <H1>Hi {data.authedUser.username}!</H1>
                <ProfileWrapper>
                    <ProfileSection
                        isGrey
                        initialValues={{
                            username: data.authedUser.username,
                            email: data.authedUser.email,
                        }}
                        render={isEditMode => (
                            <Form>
                                <ProfileSectionInput
                                    title='Username'
                                    isEditMode={isEditMode}
                                    name='username'
                                    value={data.authedUser.username}
                                />
                                <ProfileSectionInput
                                    title='Email'
                                    isEditMode={isEditMode}
                                    name='email'
                                    value={data.authedUser.email}
                                />
                            </Form>
                        )}
                    />
                    <ProfileSection
                        initialValues={{
                            instruments: data.authedUser.instruments,
                        }}
                        render={isEditMode => (
                            <Form>
                                <b>Instruments I play</b>
                                <InstrumentSelector
                                    name='instruments'
                                    instrumentsData={
                                        data.authedUser.instruments
                                    }
                                    isEditMode={isEditMode}
                                />
                            </Form>
                        )}
                    />
                    <section>
                        <b>Post</b>
                        <div>
                            {data.authedUser.posts?.map(post => (
                                <PostTile
                                    key={post.id}
                                    postTileData={post as PostTileType}
                                />
                            ))}
                        </div>
                    </section>
                </ProfileWrapper>
                {/* <input onChange={e => setNewNameInput(e.target.value)} />
                <button onClick={handleUpdateUsername}>update name</button> */}
            </>
        );

    return <p>You are not logged in!</p>;
};

export default MePage;
