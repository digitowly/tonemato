import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../../styles/globals';

export const GlobalStyle = createGlobalStyle`
li {
    list-style: none;
}

input {
    outline: 0;
    border: 1px solid ${colors.lightgrey};
    padding: .25rem .5rem;
    font-size: 1rem;
    border-radius: .5rem;
}
`;

export const LayoutWrapper = styled.div`
  margin: 2rem;
`;
