import styled, { css } from 'styled-components';
import { colors, spaceing } from '../../../../styles/globals';

type FormDropdownStyle = {
  isActive: boolean;
};

const dropdownColor = '#ededff';

export const FormDropdownWrapper = styled.div`
  width: fit-content;
  width: 150px;
  cursor: pointer;
`;

export const FormDropdownInner = styled.div<FormDropdownStyle>`
  /* background-color: ${colors.grey}; */
  background-color: ${dropdownColor};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.2s;

  ${(props) =>
    props.isActive &&
    css`
      border-radius: 0.5rem 0.5rem 0 0;
    `}
`;

export const FromDropdownSelect = styled.div`
  color: ${colors.highlight};
  font-weight: bold;
`;

export const FormDropdownExpand = styled.div<FormDropdownStyle>`
  background-color: ${colors.lightgrey};
  border: 1px solid ${dropdownColor};
  border-radius: 0 0 0.5rem 0.5rem;
  display: ${(props) => (props.isActive ? 'block' : ' none')};
  padding: 0.5rem 1rem;
  position: absolute;
  width: inherit;
`;

export const FormDropdownOption = styled.div<FormDropdownStyle>`
  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.highlight};
    `}
`;
