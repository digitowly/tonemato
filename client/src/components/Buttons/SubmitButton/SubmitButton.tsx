import styles from './SubmitButton.module.scss';

export enum ButtonSize {
  small,
  large,
}

interface SubmitButtonProps {
  value?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: ButtonSize;
  callback?: () => {};
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  value,
  type = 'submit',
  size = ButtonSize.small,
  callback,
}) => {
  return (
    <button
      className={`${styles['submit-button']} ${
        size === ButtonSize.large && styles['submit-button__large']
      }`}
      type={type}
      onClick={callback}>
      {children ? children : value}
    </button>
  );
};
export default SubmitButton;
