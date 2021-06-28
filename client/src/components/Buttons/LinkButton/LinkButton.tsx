import React, { ComponentType } from 'react';
import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { withButton } from '../BaseButton/BaseButton';
import ArrowRight from '../../../icons/ArrowRight';

const LinkButton: ComponentType<any> = withButton(
  BaseButton,
  css`
    background-color: transparent;
    color: ${colors.highlight};
    padding: 0%;

    svg:last-child {
      margin-left: 0.3rem;
    }
  `,
  {
    after: (
      <ArrowRight
        fill={colors.highlight}
        customStyle={css`
          transform: scale(0.6);
        `}
      />
    ),
  }
);

export default LinkButton;
