import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { filterOptions, useDropdown } from '../../../hooks/useDropdown';
import * as S from './BaseDropdown.style';

export interface DropdownExtendProps {
  name: string;
}

export interface BaseDropdownProps extends WithDropdownType {
  name: string;
  filter?: filterOptions;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  children,
  name,
  filter = { isActive: false, initExpand: true },
  innerStyle,
  expandStyle,
}) => {
  const {
    filterRef,
    dropdownRef,
    isOpen,
    setOpen,
    value,
    setFilterValue,
    filteredOptions,
  } = useDropdown(name, { ...filter, list: children });

  return (
    <S.FormDropdownWrapper ref={dropdownRef}>
      <S.FormDropdownInner
        isActive={isOpen}
        onClick={() => filter.initExpand && setOpen((o) => !o)}
        customStyle={innerStyle}>
        <S.FromDropdownSelect>
          {!filter.isActive ? (
            value
          ) : (
            <input
              ref={filterRef}
              placeholder='search'
              onChange={(e) => setFilterValue(e.target.value)}
            />
          )}
        </S.FromDropdownSelect>
      </S.FormDropdownInner>
      <S.FormDropdownExpand isActive={isOpen} customStyle={expandStyle}>
        {filter.isActive ? filteredOptions : children}
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
