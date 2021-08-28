import { ComponentType } from 'react';
import { css } from 'styled-components';
import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import {
  withDropdown,
  BaseDropdownProps,
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentDropdownElement: ComponentType<BaseDropdownProps> = withDropdown(
  {}
);

const InstrumentDropdown: React.FC<DropdownExtendProps> = ({ name }) => {
  const { data } = useListInstrumentsQuery();
  const { setValue, value } = useDropdown(name);

  return (
    <InstrumentDropdownElement name={name}>
      {data &&
        data.instruments.map((instrument) => (
          <FormDropdownOption
            isActive={instrument.name === value}
            key={instrument.id}
            onClick={() => setValue(instrument.name)}>
            {instrument.name}
          </FormDropdownOption>
        ))}
    </InstrumentDropdownElement>
  );
};

export default InstrumentDropdown;
