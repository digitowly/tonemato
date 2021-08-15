import styled from 'styled-components';
import { colors } from '../../../styles/globals';

export const ProfileMenu = styled.div`
  position: absolute;
  top: 4rem;

  img {
    width: 3rem;
  }
`;

export const SubnavWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
  flex-direction: column;

  ul {
    width: 100%;
    li {
      list-style: none;
      margin-top: 0.5rem;
    }
  }
`;

export const SubnavInner = styled.div`
  animation: slideIn 0.15s;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: relative;
  min-width: 200px;
  background: ${colors.white};
  border: 1px solid ${colors.lighgrey};
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.1);
  z-index: 50;

  @keyframes slideIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
