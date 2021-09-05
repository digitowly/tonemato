import { ComponentType } from 'react';
import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const NewFieldButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: ${colors.presley};
    color: ${colors.snow};
    font-weight: bold;
  `
);

export default NewFieldButton;
