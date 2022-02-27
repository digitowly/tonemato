import styled from 'styled-components';
import { colors } from '../../styles/globals';

type Text = {
    color?: string;
};

export const H1 = styled.h1<Text>`
    font-size: 1.75rem;
    font-weight: 700;
    color: ${props => (props.color ? props.color : colors.onyx)};
`;

export const H2 = styled.h2<Text>`
    font-size: 1.5rem;
    color: ${props => (props.color ? props.color : colors.onyx)};
`;
