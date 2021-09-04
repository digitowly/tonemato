import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import { useDropdown } from '../../../hooks/useDropdown';
import * as S from './BaseDropdown.style';

export type filterOptions = {
  value: string;
  update: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
};

export type dropdownConfig = {
  initExpand: boolean;
};

export interface DropdownExtendProps {
  name: string;
  preFilter?: string[];
}

export interface BaseDropdownProps extends WithDropdownType {
  name: string;
  config?: dropdownConfig;
  filter?: filterOptions;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  children,
  name,
  config = { initExpand: true },
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
    if (filterRef.current) filterRef.current.value = value.name ?? '';
    value && filter?.update(value.name ?? '');

    if (value === '' && filterRef.current) {
      filterRef.current.focus();
    }
  }, [value]);

  return (
    <S.FormDropdownWrapper data-testid='basedropdown-wrapper' ref={dropdownRef}>
      <S.FormDropdownInner
        isActive={isOpen}
        customStyle={innerStyle}
        onClick={() => config.initExpand && setOpen((o) => !o)}>
        <S.FromDropdownSelect data-testid='basedropdown-select'>
          {!filter ? (
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
                  filter?.update(e.target.value);
                }}
              />
              {value && (
                <button
                  onClick={() => {
                    filter?.reset();
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

interface BaseDropdownElementProps {
  name: string;
  value: any;
}

export const BaseDropdownElement: React.FC<BaseDropdownElementProps> = ({
  name,
  value,
  children,
}) => {
  const { setValue } = useDropdown(name);
  return (
    <div data-testid='basedropdown-element' onClick={() => setValue(value)}>
      {children}
    </div>
  );
};

export default BaseDropdown;
