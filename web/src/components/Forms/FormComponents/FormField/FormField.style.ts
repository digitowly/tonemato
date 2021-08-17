import styled, { css } from 'styled-components';
import { colors, heights } from '../../../../styles/globals';

export const FormFieldWrapper = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 0.5rem;
  height: ${heights.formField}px;
  margin-bottom: 1rem;
  input {
    font-size: 1rem;
    outline: none;
    border: none;
    margin-top: ${heights.formField / 2}px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const FormFieldLabelWrapper = styled.div`
  height: ${heights.formField}px;
`;

export const FormFieldLabelName = styled.div<{ isActive: boolean }>`
  color: ${colors.grey};
  position: absolute;
  transition: transform 0.15s ease-in-out;
  left: 1.5rem;
  transform: translateY(${heights.formField / 4}px)
    ${(props) =>
      props.isActive &&
      css`
        transform: translate(-2px, 0) scale(0.8);
      `};
`;
