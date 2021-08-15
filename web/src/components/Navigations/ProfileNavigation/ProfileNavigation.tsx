import styles from './ProfileNavigation.module.scss';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';

interface ProfileNavigationProps {
  subNavOpen: boolean;
  toggleSubnav: () => void;
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({
  subNavOpen,
  toggleSubnav,
}) => {
  let loggedIn = false;
  return (
    <>
      <div className={styles['profile-nav']}>
        {loggedIn ? (
          <div onClick={() => toggleSubnav()}>
            {/* <img src={session.user.image} /> */}
          </div>
        ) : (
          <SecondaryButton label='login' onClick={() => {}} />
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
