import { useAuthedUserQuery } from '../../generated/codegen_types';

export function useAuth() {
  const { data, loading } = useAuthedUserQuery();

  const isAuth = data && data.authedUser;

  return {
    isAuth,
    loading,
  };
}
