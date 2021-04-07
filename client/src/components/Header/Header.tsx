import Link from 'next/link';
import Image from 'next/image';
import ProfileNavigation from '../Navigations/ProfileNavigation/ProfileNavigation';
import styles from './Header.module.scss';
// import logo from './assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <img src='/assets/logo.svg' />
      </Link>

      <nav>
        <Link href='/posts'>posts</Link>
      </nav>
      <ProfileNavigation />
    </header>
  );
};

export default Header;
