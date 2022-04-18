import { useState } from 'react';
import {
    AuthedUserDocument,
    AuthedUserQuery,
    useLoginUserMutation,
} from '../../generated/codegen_types';

export function useLogin() {
    const [loginUser] = useLoginUserMutation();
    const [isLoading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        setErrorMessage('');
        try {
            await loginUser({
                variables: { loginEmail: email, loginPassword: password },
                update: (store, { data }) => {
                    store.writeQuery<AuthedUserQuery>({
                        query: AuthedUserDocument,
                        data: {
                            authedUser: data.login.user,
                        },
                    });
                },
            });
        } catch (err) {
            console.log(err.message);
            setErrorMessage(err.message);
        }
        setLoading(false);
    };

    return {
        handleLogin,
        isLoading,
        errorMessage,
    };
}
