import React from 'react';
import Header from '../Header/Header';
import Backdrop from './Backdrop/Backdrop';
import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Backdrop />
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
