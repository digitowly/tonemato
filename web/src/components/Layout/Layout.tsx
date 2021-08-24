import React from 'react';
import Header from '../Header/Header';
import Backdrop from './Backdrop/Backdrop';
import { GlobalStyle } from './Layout.style';
import * as S from './Layout.style';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Backdrop />
      <Header />
      <S.LayoutWrapper>{children}</S.LayoutWrapper>
    </>
  );
};

export default Layout;
