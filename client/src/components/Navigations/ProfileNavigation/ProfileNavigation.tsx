import styles from './ProfileNavigation.module.scss';
import { useSession } from 'next-auth/client';
import { useState } from 'react';

const ProfileNavigation: React.FC = () => {
  const [session] = useSession();
  const [subnav, setSubnav] = useState(false);
  return (
    <>
      <div className={styles['profile-nav']}>
        {session ? (
          <div onClick={() => setSubnav(!subnav)}>
            <img src={session.user.image} />
          </div>
        ) : (
          <button>login</button>
        )}
      </div>
      {subnav && (
        <div className={styles['profile-nav__subnav']}>
          <ul>
            <li>profile</li>
            <li>settings</li>
            <li>sign out</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileNavigation;
