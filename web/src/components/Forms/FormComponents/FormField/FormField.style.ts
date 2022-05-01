import styled from 'styled-components';
import { Colors } from '../../../../styles/Colors';
import { heights } from '../../../../styles/globals';

// LABELED
export const FormFieldLabWrapper = styled.div`
    border: 1px solid ${Colors.wolf};
    border-radius: 0.5rem;
    height: ${heights.formField}px;
    margin-bottom: 1rem;

    input {
        font-size: 1rem;
        outline: none;
        border: none;
        padding: 0;
        border-radius: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.1rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
`;

export const FormFieldLabLabelWrapper = styled.div`
    height: ${heights.formField}px;
    display: flex;
    justify-content: flex-start !important;
    align-self: start;
    background-color: transparent;
`;

export const FormFieldLabLabelName = styled.div<{ isActive: boolean }>`
    color: ${Colors.wolf};
    position: absolute;
    transition: transform 0.15s ease-in-out;
    margin-left: 0.5rem;
    transform-origin: left;
    transform: ${({ isActive }) =>
        isActive ? `translateY(10%) scale(0.85)` : `translateY(90%)`};
`;

// NATURAL

type NaturalInput = {
    isLarge?: boolean;
    backgroundColor?: Colors;
    type: string;
};

export const FormFieldNatWrapper = styled.div<NaturalInput>`
    input,
    textarea {
        font-size: ${({ isLarge }) => (isLarge ? '1.5rem' : '1rem')};
        font-weight: ${({ isLarge }) => (isLarge ? 'bold' : 'regular')};
        outline: 0;
        border: 0;
        margin-left: ${({ isLarge }) => (isLarge ? '0.5rem' : '0rem')};
        width: 100%;
        background-color: ${({ backgroundColor }) =>
            backgroundColor ?? 'transparent'};
        padding: ${({ backgroundColor }) =>
            backgroundColor ? `0.25rem 0.75rem` : '0'};

        &::placeholder {
            color: ${Colors.wolf};
        }
    }

    textarea {
        font-size: 1rem;
        height: 250px;
        font-weight: normal;
        resize: none;
        background-color: ${Colors.white};
        padding: 1rem;
        color: ${Colors.onyx};
        border-radius: 0.5rem;

        &::placeholder {
            font-weight: normal;
        }
    }
`;
