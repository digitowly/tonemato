import { useField } from 'formik';
import React, { useRef, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import * as S from './BaseDropdown.style';

export interface DropdownExtendProps {
  name: string;
}

export interface BaseDropdownProps extends WithDropdownType {
  options: string[];
  name: string;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  options,
  name,
  innerStyle,
  expandStyle,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [_, { value }, { setValue }] = useField(name);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(dropdownRef, () => setOpen(false));

  const handleSelect = (option: string) => {
    setOpen(false);
    setValue(option);
  };

  return (
    <S.FormDropdownWrapper ref={dropdownRef}>
      <S.FormDropdownInner
        isActive={isOpen}
        onClick={() => setOpen((o) => !o)}
        customStyle={innerStyle}>
        <S.FromDropdownSelect>{value}</S.FromDropdownSelect>
      </S.FormDropdownInner>
      <S.FormDropdownExpand isActive={isOpen} customStyle={expandStyle}>
        {options &&
          options.map((option, index) => (
            <S.FormDropdownOption
              key={index}
              isActive={value === option}
              onClick={() => handleSelect(option)}>
              {option}
            </S.FormDropdownOption>
          ))}
      </S.FormDropdownExpand>
    </S.FormDropdownWrapper>
  );
};

export interface WithDropdownType {
  innerStyle?: FlattenSimpleInterpolation;
  expandStyle?: FlattenSimpleInterpolation;
}

export const withDropdown = ({ innerStyle, expandStyle }: WithDropdownType) => {
  return (props) => (
    <BaseDropdown
      innerStyle={innerStyle}
      expandStyle={expandStyle}
      {...props}
    />
  );
};

export default BaseDropdown;
