import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useAuthedUserQuery } from '../../generated/codegen_types';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import UserProfileButton from '../Buttons/UserProfileButton/UserProfileButton';
import ProfileMenu from '../Navigations/ProfileMenu/ProfileMenu';
import * as S from './Header.style';

const Header: React.FC = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const { data, loading } = useAuthedUserQuery();
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
            <UserProfileButton onClick={() => setProfileMenuOpen((sn) => !sn)}>
              {data.authedUser.username}
              <S.UserImage>
                <Image
                  width={S.profileImgSize}
                  height={S.profileImgSize}
                  src='http://www.canada-work.com/_/rsrc/1531284300421/assistants/male_generic_profile.png'></Image>
              </S.UserImage>
            </UserProfileButton>
          ) : (
            !loading && (
              <SecondaryButton
                label='login'
                onClick={() => setProfileMenuOpen((sn) => !sn)}
              />
            )
          )}
          <ProfileMenu isOpen={isProfileMenuOpen} />
        </div>
      </S.Header>
    </>
  );
};

export default Header;
