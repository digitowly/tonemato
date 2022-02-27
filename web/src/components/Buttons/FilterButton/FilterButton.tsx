import { ComponentType } from 'react';
import { css } from 'styled-components';
import { Colors } from '../../../styles/Colors';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const FilterButton: ComponentType<any> = withButton(
    BaseButton,
    css`
        background-color: ${Colors.hendrix};
        color: ${Colors.white};
        font-weight: bold;
        min-width: 120px;
    `
);

export default FilterButton;
