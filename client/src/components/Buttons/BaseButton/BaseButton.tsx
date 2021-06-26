import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../styles/globals';

interface BaseButton {
  customStyle: FlattenSimpleInterpolation;
}

const BaseButton = styled.button<BaseButton>`
  background-color: ${colors.white};
  border: transparent;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.75rem 1rem;

  ${(props) => props.customStyle}
`;

interface BottonProps {
  customStyle: FlattenSimpleInterpolation;
  label: string;
}

const Button: React.FC<BottonProps> = ({ label, customStyle }) => {
  return <BaseButton customStyle={customStyle}>{label}</BaseButton>;
};

export default Button;

export const render = (
  Component: React.FC,
  customStyle: FlattenSimpleInterpolation
) => {
  return (props) => {
    return <Component {...props} customStyle={customStyle} />;
  };
};
