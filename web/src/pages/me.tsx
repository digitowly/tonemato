import { Formik } from 'formik';
import React, { useState } from 'react';
import InstrumentSelector from '../components/Forms/InstrumentSelector/InstrumentSelector';
import PostTile, { PostTileType } from '../components/PostTile/PostTile';
import {
    ProfileSection,
    ProfileWrapper,
} from '../components/Profile/Profile.style';
import { H1 } from '../components/Text/Headline';
import {
    useUpdateUsernameMutation,
    useUserProfileQuery,
} from '../generated/codegen_types';
import { useUpdateInstruments } from '../hooks/user/useUpdateInstruments';

const MePage: React.FC = () => {
    const { data, error } = useUserProfileQuery();
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

    return (
        <>
            {!!(data && data.authedUser) && (
                <div>
                    <H1>Profile</H1>
                    <ProfileWrapper>
                        <ProfileSection isGrey>
                            <b>Username </b>
                            <p>{data.authedUser?.username}</p>
                            <b>Email </b>
                            <p>{data.authedUser?.email}</p>
                        </ProfileSection>
                        <ProfileSection>
                            <b>Instruments I play </b>
                            <Formik
                                initialValues={{
                                    instruments: data.authedUser.instruments,
                                }}
                                onSubmit={() => console.log('test')}>
                                {({ values }) => (
                                    <div>
                                        <InstrumentSelector
                                            name='instruments'
                                            instrumentsData={
                                                data.authedUser.instruments
                                            }
                                        />
                                        <button
                                            onClick={() => {
                                                const instrumentIds = values.instruments.map(
                                                    instrument => instrument.id
                                                );
                                                handleUpdateInstruments(
                                                    instrumentIds
                                                );
                                            }}>
                                            update instruments
                                        </button>
                                    </div>
                                )}
                            </Formik>
                        </ProfileSection>
                        <ProfileSection>
                            <b>Post</b>
                            <div>
                                {data.authedUser.posts?.map(post => (
                                    <PostTile
                                        key={post.id}
                                        postTileData={post as PostTileType}
                                    />
                                ))}
                            </div>
                        </ProfileSection>
                    </ProfileWrapper>
                    <input onChange={e => setNewNameInput(e.target.value)} />
                    <button onClick={handleUpdateUsername}>update name</button>
                </div>
            )}
        </>
    );
};

export default MePage;
