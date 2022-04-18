import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from '../../styles/Colors';
import { colors } from '../../styles/globals';
import { Spacing } from '../../styles/Spacing';

export const GlobalStyle = createGlobalStyle`
li {
    list-style: none;
}

input {
    outline: 0;
    border: 1px solid ${colors.snow};
    padding: .25rem .5rem;
    font-size: 1rem;
    border-radius: .5rem;
    background-color: transparent;
}

textarea {
    font-family: 'Montserrat', sans-serif;
}


button {
    background-color: transparent;
    border: none;
    text-align: left;
}

form {
        input,
        select {
            color: ${Colors.onyx};
        }
    }

`;

export const LayoutWrapper = styled.div`
    margin: 2rem;
    transition: all 0.25s;

    @media (min-width: 900px) {
        margin: 2rem ${Spacing.lg};
    }
    @media (min-width: 1200px) {
        margin: 2rem ${Spacing.xl};
    }
    @media (min-width: 1400px) {
        margin: 2rem ${Spacing.xl2};
    }
    @media (min-width: 1600px) {
        margin: 2rem ${Spacing.xl3};
    }
`;
