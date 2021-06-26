import { css } from 'styled-components';
import BaseButton, { render } from '../BaseButton/BaseButton';

export default render(
  BaseButton,
  css`
    background-color: lightgray;
    color: black;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  `
);
