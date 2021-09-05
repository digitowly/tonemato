import { animated, SpringValue } from '@react-spring/web';
import styled from 'styled-components';
import { colors } from '../../../styles/globals';

export const transitionConfig = {
  from: { y: 50, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  leave: { y: 50, opacity: 0 },
};

export const ProfileMenu = styled(animated.div)`
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
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: relative;
  min-width: 200px;
  background: ${colors.white};
  border: 1px solid ${colors.snow};
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;
