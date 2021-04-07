import Link from 'next/link';
import ProfileNavigation from '../Navigations/ProfileNavigation/ProfileNavigation';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <p>logo</p>
      <nav>
        <Link href='/posts'>posts</Link>
        <Link href='/'>home</Link>
      </nav>
      <ProfileNavigation />
    </header>
  );
};

export default Header;
