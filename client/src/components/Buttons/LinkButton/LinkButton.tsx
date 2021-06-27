import { ComponentType } from 'react';
import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';
import LinkButtonArrow from './LinkButtonArrow';

const LinkButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: transparent;
    color: ${colors.highlight};
    padding: 0%;

    svg:last-child {
      margin-left: 0.75rem;
    }
  `,
  { after: <LinkButtonArrow /> }
);

export default LinkButton;
