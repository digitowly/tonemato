import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface IconElement {
  fill: string;
  customStyle?: FlattenSimpleInterpolation;
}

interface IconSVG {
  customStyle: FlattenSimpleInterpolation;
}

const IconSVG = styled.svg<IconSVG>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  fill: ${(props) => props.fill};

  ${(props) => props.customStyle}
`;

interface IconProps {
  customStyle: FlattenSimpleInterpolation;
  width?: string;
  height?: string;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  customStyle,

  width = '25px',
  height = '25px',
  fill = '#5855C7',
  children,
}) => {
  return (
    <IconSVG
      customStyle={customStyle}
      width={width}
      height={height}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'>
      {children}
    </IconSVG>
  );
};

export default Icon;

export const withIcon = (Component, { fill, path, width, height }) => {
  return (props) => (
    <Component {...props} fill={fill} width={width} height={height}>
      <path d={path} fill={fill} />
    </Component>
  );
};
