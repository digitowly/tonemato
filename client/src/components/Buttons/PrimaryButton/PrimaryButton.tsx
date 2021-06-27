import { ComponentType } from 'react';
import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const PrimaryButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: ${colors.highlight};
    color: ${colors.white};
    font-weight: bold;
  `
);

export default PrimaryButton;
