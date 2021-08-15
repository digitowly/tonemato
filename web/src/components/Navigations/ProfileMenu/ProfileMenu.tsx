import React from 'react';
import { useRouter } from 'next/router';
import * as S from './ProfileMenu.style';
import LinkButton from '../../Buttons/LinkButton/LinkButton';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

const ProfileMenu: React.FC = () => {
  const router = useRouter();

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
            <div>
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <PrimaryButton label='login' />
              <LinkButton
                label='sign up'
                onClick={() => router.push('/register')}
              />
            </div>
          )}
        </S.SubnavInner>
      </S.SubnavWrapper>
    </S.ProfileMenu>
  );
};

export default ProfileMenu;
