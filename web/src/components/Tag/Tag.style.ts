import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const TagWrapper = styled.div<{
    backgroundColor: Colors;
    color: Colors;
}>`
    background-color: red;
    width: fit-content;
    padding: 5px 10px;
    font-size: 11px;
    border-radius: 500px;
    margin-left: 0.5rem;
    /* font-weight: bold; */
    color: ${({ color }) => color ?? Colors.onyx};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ?? Colors.jimmy};
`;
