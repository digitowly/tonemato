import styled from 'styled-components';
import { depth } from '../../../styles/globals';

export const BackdropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${depth.backdrop};
`;
