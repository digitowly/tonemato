import React from 'react';
import * as S from './ProfileMenu.style';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import { AuthedUserQuery } from '../../../generated/codegen_types';
import { useLogout } from '../../../hooks/useLogout';

interface ProfileMenuProps {
  userData: AuthedUserQuery;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ userData }) => {
  const { handleLogout } = useLogout();
  return (
    <S.ProfileMenu>
      <S.SubnavWrapper>
        <S.SubnavInner>
          {userData.authedUser ? (
            <ul>
              <li>profile</li>
              <li>settings</li>
              <li onClick={handleLogout}>sign out</li>
            </ul>
          ) : (
            <LoginForm />
          )}
        </S.SubnavInner>
      </S.SubnavWrapper>
    </S.ProfileMenu>
  );
};

export default ProfileMenu;
