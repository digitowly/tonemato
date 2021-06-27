import { ComponentType } from 'react';
import { css } from 'styled-components';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const SecondaryButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: #f2f2f2;
    color: black;
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  `
);

export default SecondaryButton;
