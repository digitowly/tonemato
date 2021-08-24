import { useField } from 'formik';
import React, { useRef, useState } from 'react';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import * as S from './FormDropdown.style';

interface FormDropdownProps {
  options: string[];
  name: string;
}

const FormDropdown: React.FC<FormDropdownProps> = ({ options, name }) => {
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
      <S.FormDropdownInner isActive={isOpen} onClick={() => setOpen((o) => !o)}>
        <S.FromDropdownSelect>{value}</S.FromDropdownSelect>
      </S.FormDropdownInner>
      <S.FormDropdownExpand isActive={isOpen}>
        {options.map((option, index) => (
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

export default FormDropdown;
