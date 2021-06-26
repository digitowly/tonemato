import Link from 'next/link';
import { useState } from 'react';
import ProfileNavigation from '../Navigations/ProfileNavigation/ProfileNavigation';
import styles from './Header.module.scss';
import { Session } from 'next-auth';

interface HeaderProps {
  session: Session;
}

const Header: React.FC<HeaderProps> = ({ session }) => {
  const [userSubNavOpen, setUserSubNavOpen] = useState(false);
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
