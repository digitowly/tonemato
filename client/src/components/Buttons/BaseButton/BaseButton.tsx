import React, { ComponentType, ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../styles/globals';

interface BaseButton {
  customStyle: FlattenSimpleInterpolation;
}

const BaseButton = styled.button<BaseButton>`
  align-items: center;
  background-color: ${colors.white};
  border: transparent;
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;

  ${(props) => props.customStyle}
`;

interface ButtonIcon {
  before?: ReactElement<any, any>;
  after?: ReactElement<any, any>;
}

interface BottonProps {
  icon?: ButtonIcon;
  customStyle: FlattenSimpleInterpolation;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<BottonProps> = ({
  label,
  customStyle,
  icon,
  onClick,
}) => {
  return (
    <BaseButton customStyle={customStyle} onClick={onClick}>
      {icon && icon.before && icon.before}
      {label}
      {icon && icon.after && icon.after}
    </BaseButton>
  );
};

export default Button;

export const withButton = (
  Component: ComponentType,
  customStyle: FlattenSimpleInterpolation,
  icon?: ButtonIcon
) => {
  return (props) => {
    return <Component {...props} customStyle={customStyle} icon={icon} />;
  };
};
