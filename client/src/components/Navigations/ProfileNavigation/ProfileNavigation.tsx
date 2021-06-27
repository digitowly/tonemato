import styles from './ProfileNavigation.module.scss';
import { signIn } from 'next-auth/client';
import { Session } from 'next-auth';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';

interface ProfileNavigationProps {
  session: Session;
  subNavOpen: boolean;
  toggleSubnav: () => void;
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({
  session,
  subNavOpen,
  toggleSubnav,
}) => {
  return (
    <>
      <div className={styles['profile-nav']}>
        {session ? (
          <div onClick={() => toggleSubnav()}>
            <img src={session.user.image} />
          </div>
        ) : (
          <SecondaryButton label='login' onClick={() => signIn()} />
        )}
      </div>
      {subNavOpen && (
        <div className={styles['profile-nav__subnav']}>
          <div className={styles['profile-nav__subnav__inner']}>
            <ul>
              <li>profile</li>
              <li>settings</li>
              <li>sign out</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileNavigation;
