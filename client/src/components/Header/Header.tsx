import Link from 'next/link';
import { useState } from 'react';
import ProfileNavigation from '../Navigations/ProfileNavigation/ProfileNavigation';
import { Session } from 'next-auth';
import * as S from './Header.style';

interface HeaderProps {
  session: Session;
}

const Header: React.FC<HeaderProps> = ({ session }) => {
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
        session={session}
        subNavOpen={userSubNavOpen}
        toggleSubnav={() => setUserSubNavOpen((isOpen) => !isOpen)}
      />
    </S.Header>
  );
};

export default Header;
