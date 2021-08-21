import { useAuthedUserQuery } from '../../generated/codegen_types';

export function useAuth() {
  const { data, loading } = useAuthedUserQuery();

  const isAuth = data && data.authedUser;
  const userId = data?.authedUser ? data.authedUser.id : null;

  return {
    isAuth,
    userId,
    loading,
  };
}
