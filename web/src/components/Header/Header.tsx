import Link from 'next/link';
import { useState } from 'react';
import ProfileNavigation from '../Navigations/ProfileNavigation/ProfileNavigation';
import * as S from './Header.style';

const Header: React.FC = () => {
  const [userSubNavOpen, setUserSubNavOpen] = useState(false);
  return (
    <S.Header>
      <Link href='/'>
        <img src='/assets/logo.svg' />
      </Link>

      <nav>
        <Link href='/posts'>posts</Link>
      </nav>
      <ProfileNavigation
        subNavOpen={userSubNavOpen}
        toggleSubnav={() => setUserSubNavOpen((isOpen) => !isOpen)}
      />
    </S.Header>
  );
};

export default Header;
