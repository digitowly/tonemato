import React, { ComponentType, ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../styles/globals';

interface BaseButton {
    customStyle: FlattenSimpleInterpolation;
}

const BaseButton = styled.button<BaseButton>`
    align-items: center;
    background-color: ${colors.snow};
    border: transparent;
    border-radius: 5rem;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    padding: 0.75rem 1.25rem;

    ${props => props.customStyle}
`;

interface ButtonIcon {
    before?: ReactElement<any, any>;
    after?: ReactElement<any, any>;
}

interface BottonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ButtonIcon;
    customStyle: FlattenSimpleInterpolation;
    label?: string;
    onClick?: () => void;
    preventDefault?: boolean;
}

const Button: React.FC<BottonProps> = ({
    label,
    customStyle,
    icon,
    children,
    onClick,
    preventDefault = false,
    ...props
}) => {
    const handleClick = e => {
        if (preventDefault && e) e.preventDefault();
        onClick && onClick();
    };
    return (
        <BaseButton customStyle={customStyle} onClick={handleClick} {...props}>
            {icon && icon.before && icon.before}
            {label}
            {children}
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
    return props => {
        return <Component {...props} customStyle={customStyle} icon={icon} />;
    };
};
