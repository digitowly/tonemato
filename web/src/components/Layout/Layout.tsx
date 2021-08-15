import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
