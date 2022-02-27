import { ComponentType } from 'react';
import { css } from 'styled-components';
import { Colors } from '../../../styles/Colors';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const NewFieldButton: ComponentType<any> = withButton(
    BaseButton,
    css`
        background-color: ${colors.elvis};
        font-weight: bold;
        width: 30px;
        height: 30px;
        padding: 0;
        align-items: center;
        justify-content: center;

        &::before {
            content: '+';
            color: ${Colors.presley};
            font-size: 18px;
        }
    `
);

export default NewFieldButton;
