import { ComponentType } from 'react';
import { css } from 'styled-components';
import { Colors } from '../../../styles/Colors';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const RemoveItemButton: ComponentType<any> = withButton(
    BaseButton,
    css`
        width: 50px;
        padding: 0;
        justify-content: center;

        &::before {
            content: ' ';
            background-color: ${Colors.stewart};
            width: 15px;
            height: 4px;
            border-radius: 10px;
        }
    `
);

export default RemoveItemButton;
