import React, { ComponentType } from 'react';
import { css } from 'styled-components';
import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import {
  withDropdown,
  BaseDropdownProps,
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentFilterDropdownElement: ComponentType<BaseDropdownProps> = withDropdown(
  {}
);

const InstrumentFilterDropdown: React.FC<DropdownExtendProps> = ({ name }) => {
  const { data } = useListInstrumentsQuery();
  const { setValue, value } = useDropdown(name);

  return (
    <InstrumentFilterDropdownElement
      filter={{ isActive: true, initExpand: false, list: data?.instruments }}
      name={name}>
      {data &&
        data.instruments.map((instrument) => (
          <FormDropdownOption
            isActive={instrument.name === value}
            key={instrument.id}
            onClick={() => setValue(instrument.name)}>
            {instrument.name}
          </FormDropdownOption>
        ))}
    </InstrumentFilterDropdownElement>
  );
};

export default InstrumentFilterDropdown;
