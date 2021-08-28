import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useAuthedUserQuery } from '../../generated/codegen_types';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import ProfileMenu from '../Navigations/ProfileMenu/ProfileMenu';
import * as S from './Header.style';

const Header: React.FC = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const { data } = useAuthedUserQuery();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useDetectOutsideClick(profileMenuRef, () => setProfileMenuOpen(false));

  return (
    <>
      <S.Header>
        <Link href='/'>
          <img src='/assets/logo.svg' />
        </Link>

        <nav>
          <Link href='/posts'>posts</Link>
        </nav>
        <div ref={profileMenuRef}>
          {data && data.authedUser ? (
            <div onClick={() => setProfileMenuOpen((sn) => !sn)}>
              {/* <img src={session.user.image} /> */}
              {data.authedUser.username}
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
