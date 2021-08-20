import React from 'react';
import * as S from './ProfileMenu.style';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import { useLogout } from '../../../hooks/auth/useLogout';
import { useAuth } from '../../../hooks/auth/useAuth';

const ProfileMenu: React.FC = () => {
  const { handleLogout } = useLogout();
  const { isAuth } = useAuth();
  return (
    <S.ProfileMenu>
      <S.SubnavWrapper>
        <S.SubnavInner>
          {isAuth ? (
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
