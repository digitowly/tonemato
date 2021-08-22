import styled from 'styled-components';
import { colors, depth } from '../../styles/globals';

export const Header = styled.header`
  align-items: center;
  background: ${colors.lightgrey};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 80px;
  justify-content: center;
  padding: 1rem 2rem;
  position: relative;
  width: 100%;
  z-index: ${depth.header};

  div:last-child {
    display: flex;
    grid-column: 3;
    justify-content: flex-end;
  }

  nav {
    display: flex;
  }

  img {
    cursor: pointer;
  }
`;
