import {
  AuthedUserDocument,
  AuthedUserQuery,
  useLoginUserMutation,
} from '../generated/codegen_types';

export function useLogin() {
  const [loginUser] = useLoginUserMutation();

  const handleLogin = async ({ email, password }) => {
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
    }
  };

  return {
    handleLogin,
  };
}
