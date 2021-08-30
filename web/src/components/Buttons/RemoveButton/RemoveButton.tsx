import { ComponentType } from 'react';
import { css } from 'styled-components';
import BaseButton, { withButton } from '../BaseButton/BaseButton';

const RemoveButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: #ff5050;
    color: #f2f2f2;
    font-size: 0.75rem;
    padding: 0.1rem 0.75rem;
  `
);

export default RemoveButton;
