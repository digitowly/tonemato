import { Formik } from 'formik';
import React, { useState } from 'react';
import InstrumentSelector from '../components/Forms/InstrumentSelector/InstrumentSelector';
import Layout from '../components/Layout/Layout';
import {
    useUpdateUsernameMutation,
    useUserProfileQuery,
} from '../generated/codegen_types';
import { useUpdateInstruments } from '../hooks/user/useUpdateInstruments';

const MePage: React.FC = () => {
    const { data } = useUserProfileQuery();
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

    return (
        <Layout>
            {data && data.authedUser && (
                <div>
                    <div>hello {data.authedUser.username}!</div>
                    <input onChange={e => setNewNameInput(e.target.value)} />
                    <button onClick={handleUpdateUsername}>update name</button>

                    <div>email: {data.authedUser.email}</div>
                    <div>
                        <p>instruments:</p>
                        <ul>
                            {data.authedUser.instruments.map(instrument => (
                                <li key={instrument.id}>{instrument.name}</li>
                            ))}
                        </ul>

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
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default MePage;
