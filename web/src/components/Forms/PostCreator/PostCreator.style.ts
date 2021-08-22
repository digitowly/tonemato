import styled from 'styled-components';
import { colors, depth } from '../../../styles/globals';

export const PostCreatorWrapper = styled.div`
  background-color: ${colors.lightgrey};
  border-radius: 0.5rem;
  padding: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  z-index: ${depth.modal};
`;
