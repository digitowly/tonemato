import styles from './FormWrapper.module.scss';

const FormWrapper: React.FC = ({ children }) => {
  return <div className={styles.form}>{children}</div>;
};

export default FormWrapper;
