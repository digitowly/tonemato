import { useLogoutUserMutation } from '../../generated/codegen_types';

export function useLogout() {
  const [logoutUser, { client }] = useLogoutUserMutation();
  const handleLogout = async () => {
    await logoutUser();
    await client.resetStore();
  };
  return {
    handleLogout,
  };
}
