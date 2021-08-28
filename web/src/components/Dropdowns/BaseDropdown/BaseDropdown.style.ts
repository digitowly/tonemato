import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { colors, depth, spaceing } from '../../../styles/globals';

type FormDropdownStyle = {
  isActive: boolean;
  customStyle?: FlattenSimpleInterpolation;
};

const dropdownColor = '#ededff';

export const FormDropdownWrapper = styled.div`
  width: fit-content;
  width: 150px;
  cursor: pointer;
`;

export const FormDropdownInner = styled.div<FormDropdownStyle>`
  background-color: ${dropdownColor};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.2s;

  ${(props) =>
    props.isActive &&
    css`
      border-radius: 0.5rem 0.5rem 0 0;
    `}

  ${(props) => props.customStyle}
`;

export const FromDropdownSelect = styled.div`
  color: ${colors.highlight};
  font-weight: bold;

  input {
    width: 100%;
    padding: 0;
    background: transparent;
    border: 0;
    border-radius: 0;
    color: ${colors.highlight};
    font-weight: bold;
  }
`;

export const FormDropdownExpand = styled.ul<FormDropdownStyle>`
  background-color: ${colors.lightgrey};
  border: 1px solid ${dropdownColor};
  border-radius: 0 0 0.5rem 0.5rem;
  display: ${(props) => (props.isActive ? 'block' : ' none')};
  padding: 0.5rem 1rem;
  position: absolute;
  width: inherit;

  ${(props) => props.customStyle}
`;

export const FormDropdownOption = styled.li<FormDropdownStyle>`
  padding: 0.15rem 0;

  &:hover {
    color: ${colors.clash};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.highlight};
    `}
`;
