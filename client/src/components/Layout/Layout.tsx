import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
