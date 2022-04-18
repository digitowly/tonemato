import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import { Spacing } from '../../styles/Spacing';

export const ModalWrapper = styled.div`
    background-color: ${Colors.snow};
    padding: 2rem;
    border-radius: 0.5rem;
`;

export const ModalTopRow = styled.div`
    justify-content: space-between;
    display: flex;
    margin-bottom: ${Spacing.xs};
`;

export const ModalOuter = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2rem;

    @media (min-width: 900px) {
        padding: 2rem ${Spacing.lg};
    }
    @media (min-width: 1200px) {
        padding: 2rem ${Spacing.xl};
    }
    @media (min-width: 1400px) {
        padding: 2rem ${Spacing.xl2};
    }
    @media (min-width: 1600px) {
        padding: 2rem ${Spacing.xl3};
    }
`;
