import { ComponentType } from 'react';
import { css } from 'styled-components';
import { Colors } from '../../../styles/Colors';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const PrimaryButton: ComponentType<any> = withButton(
    BaseButton,
    css`
        background-color: ${colors.presley};
        color: ${colors.white};
        font-weight: bold;

        transition: all 0.25s ease-in;

        &:hover {
            filter: brightness(1.5);
        }
    `
);

export default PrimaryButton;
