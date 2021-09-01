import React from 'react';
import * as S from './ProfileMenu.style';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import { useLogout } from '../../../hooks/auth/useLogout';
import { useAuth } from '../../../hooks/auth/useAuth';
import Link from 'next/link';
import { useTransition } from '@react-spring/web';

interface ProfileMenuPros {
  isOpen: boolean;
}
const ProfileMenu: React.FC<ProfileMenuPros> = ({ isOpen }) => {
  const transitions = useTransition(isOpen, S.transitionConfig);
  const { handleLogout } = useLogout();
  const { isAuth } = useAuth();

  return transitions(
    (styles, item) =>
      item && (
        <S.ProfileMenu style={styles}>
          <S.SubnavWrapper>
            <S.SubnavInner>
              {isAuth ? (
                <ul>
                  <li>
                    <Link href='/me'>profile</Link>
                  </li>
                  <li>settings</li>
                  <li onClick={handleLogout}>sign out</li>
                </ul>
              ) : (
                <LoginForm />
              )}
            </S.SubnavInner>
          </S.SubnavWrapper>
        </S.ProfileMenu>
      )
  );
};

export default ProfileMenu;
