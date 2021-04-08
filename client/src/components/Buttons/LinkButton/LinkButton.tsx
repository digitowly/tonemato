import Link from 'next/link';
import LinkButtonArrow from './LinkButtonArrow';
import styles from './LinkButton.module.scss';
interface LinkButtonProps {
  value?: string;
  arrowRight?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  value = 'more',
  arrowRight = true,
}) => {
  return (
    <div className={styles['link-button']}>
      <Link href='/'>
        <div className={styles['link-button__inner']}>
          <a>{children ? children : value}</a>
          {arrowRight && <LinkButtonArrow />}
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
