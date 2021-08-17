import React, { useState } from 'react';
import * as S from './ProfileMenu.style';
import LoginForm from '../../Forms/LoginForm/LoginForm';

const ProfileMenu: React.FC = () => {
  let loggedIn = false;

  return (
    <S.ProfileMenu>
      <S.SubnavWrapper>
        <S.SubnavInner>
          {loggedIn ? (
            <ul>
              <li>profile</li>
              <li>settings</li>
              <li>sign out</li>
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
