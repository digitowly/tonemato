import { ComponentType } from 'react';
import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const SecondaryButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: ${colors.snow};
    color: black;
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  `
);

export default SecondaryButton;
