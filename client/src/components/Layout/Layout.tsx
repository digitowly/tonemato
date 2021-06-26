import { useSession } from 'next-auth/client';
import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  const [session] = useSession();
  return (
    <>
      <Header session={session} />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
