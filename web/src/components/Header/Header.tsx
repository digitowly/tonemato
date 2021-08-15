import Link from 'next/link';
import React, { useState } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import ProfileMenu from '../Navigations/ProfileMenu/ProfileMenu';
import * as S from './Header.style';

const Header: React.FC = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  let loggedIn = false;
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
          {loggedIn ? (
            <div onClick={() => {}}>
              {/* <img src={session.user.image} /> */}
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
