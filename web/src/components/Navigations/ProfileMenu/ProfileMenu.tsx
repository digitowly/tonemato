import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './ProfileMenu.style';
import LinkButton from '../../Buttons/LinkButton/LinkButton';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import { useLoginUserMutation } from '../../../generated/codegen_types';

const ProfileMenu: React.FC = () => {
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let loggedIn = false;

  const handleLogin = async () => {
    setErrorMessage('');
    try {
      const result = await loginUser({
        variables: { loginEmail: emailInput, loginPassword: passwordInput },
      });
      console.log(result);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <S.ProfileMenu>
      <S.SubnavWrapper>
        <S.SubnavInner>
          {loggedIn ? (
            <ul>
              <li>profile</li>
              <li>settings</li>
              <li>sign out</li>
            </ul>
          ) : (
            <div>
              <input
                type='text'
                name=''
                id=''
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <input
                type='password'
                name=''
                id=''
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <PrimaryButton label='login' onClick={handleLogin} />
              <LinkButton
                label='sign up'
                onClick={() => router.push('/register')}
              />
            </div>
          )}
        </S.SubnavInner>
      </S.SubnavWrapper>
    </S.ProfileMenu>
  );
};

export default ProfileMenu;
