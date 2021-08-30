import styled, { css } from 'styled-components';
import { colors, heights, spaceing } from '../../../../styles/globals';

// LABELED
export const FormFieldLabWrapper = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 0.5rem;
  height: ${heights.formField}px;
  margin-bottom: 1rem;

  input {
    font-size: 1rem;
    outline: none;
    border: none;
    padding: 0;
    border-radius: 0;
    margin-top: ${heights.formField / 2}px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const FormFieldLabLabelWrapper = styled.div`
  height: ${heights.formField}px;
`;

export const FormFieldLabLabelName = styled.div<{ isActive: boolean }>`
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

// NATURAL

type NaturalInput = {
  type: string;
};

export const FormFieldNatWrapper = styled.div<NaturalInput>`
  height: ${(props) =>
    props.type === 'textarea' ? 'auto' : heights.formField + 'px'};
  border: 1px solid ${colors.grey};
  border-top: 0;
  border-right: 0;
  border-radius: 0 0 0 0.25rem;
  margin-bottom: ${spaceing.quite}rem;

  input,
  textarea {
    font-size: 1.8rem;
    outline: 0;
    border: 0;
    margin-top: ${heights.formField / 4}px;
    margin-left: 0.5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);

    &::placeholder {
      color: ${colors.grey};
    }
  }

  textarea {
    font-size: 1rem;
    height: 150px;
    resize: none;
  }
`;
