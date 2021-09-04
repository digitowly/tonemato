import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { depth } from '../../../styles/globals';

export const transitionConfig = {
  from: { opacity: 0 },
  enter: { opacity: 0.7 },
  leave: { opacity: 0 },
};

export const BackdropStyle = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(0, 0, 0);
  z-index: ${depth.backdrop};
`;
