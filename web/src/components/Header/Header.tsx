import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthedUserQuery } from '../../generated/codegen_types';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import ProfileMenu from '../Navigations/ProfileMenu/ProfileMenu';
import * as S from './Header.style';

const Header: React.FC = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const { data, loading, error } = useAuthedUserQuery();

  return (
    <>
      <S.Header>
        <Link href='/'>
          <img src='/assets/logo.svg' />
        </Link>

        <nav>
          <Link href='/posts'>posts</Link>
        </nav>
        <div>
          {data && data.authedUser ? (
            <div onClick={() => setProfileMenuOpen((sn) => !sn)}>
              {/* <img src={session.user.image} /> */}
              {data.authedUser.email}
            </div>
          ) : (
            <SecondaryButton
              label='login'
              onClick={() => setProfileMenuOpen((sn) => !sn)}
            />
          )}
          {isProfileMenuOpen && <ProfileMenu />}
        </div>
      </S.Header>
    </>
  );
};

export default Header;
