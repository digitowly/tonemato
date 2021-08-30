import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import * as S from './BaseDropdown.style';

export type filterOptions = {
  isActive: boolean;
  initExpand?: boolean;
  value: string;
  update: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
};

export interface DropdownExtendProps {
  name: string;
  preFilter?: string[];
}

export interface BaseDropdownProps extends WithDropdownType {
  name: string;
  filter?: filterOptions;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  children,
  name,
  filter,
  innerStyle,
  expandStyle,
}) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);
  useDetectOutsideClick(dropdownRef, () => setOpen(false));
  const [_, { value }] = useField(name);

  useEffect(() => {
    setOpen(false);
    if (filterRef.current) filterRef.current.value = value;
    value && filter.update(value);

    if (value === '' && filterRef.current) {
      filterRef.current.focus();
    }
  }, [value]);

  return (
    <S.FormDropdownWrapper ref={dropdownRef}>
      <S.FormDropdownInner
        isActive={isOpen}
        customStyle={innerStyle}
        onClick={() => filter.initExpand && setOpen((o) => !o)}>
        <S.FromDropdownSelect>
          {!filter.isActive ? (
            value
          ) : (
            <div style={{ display: 'flex' }}>
              <input
                ref={filterRef}
                placeholder='search'
                value={filter.value}
                disabled={value}
                onChange={(e) => {
                  setOpen(!!e.target.value);
                  filter.update(e.target.value);
                }}
              />
              {value && (
                <button
                  onClick={() => {
                    filter.reset();
                    filterRef.current.focus();
                  }}>
                  x
                </button>
              )}
            </div>
          )}
        </S.FromDropdownSelect>
      </S.FormDropdownInner>
      <S.FormDropdownExpand
        isActive={isOpen}
        customStyle={expandStyle}
        onClick={() => setOpen(false)}>
        {children}
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
