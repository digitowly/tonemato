import { css } from 'styled-components';
import { colors } from '../../../styles/globals';
import BaseButton, { render } from '../BaseButton/BaseButton';

// Primary Button
export default render(
  BaseButton,
  css`
    background-color: ${colors.highlight};
    color: ${colors.white};
    font-weight: bold;
  `
);
