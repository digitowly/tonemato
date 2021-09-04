import React from 'react';
import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
  BaseDropdownElement,
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentFilterDropdown: React.FC<DropdownExtendProps> = ({
  name,
  preFilter,
}) => {
  const { data } = useListInstrumentsQuery();
  const { filter, value } = useDropdown(name);

  return (
    <BaseDropdown filter={filter} name={name} config={{ initExpand: false }}>
      {data &&
        data.instruments
          .filter((instrument) => !preFilter.includes(instrument.name))
          .filter((instrument) => instrument.name.startsWith(filter.value))
          .map((instrument) => (
            <BaseDropdownElement value={instrument} name={name}>
              <FormDropdownOption
                isActive={instrument === value}
                key={instrument.id}>
                {instrument.name}
              </FormDropdownOption>
            </BaseDropdownElement>
          ))}
    </BaseDropdown>
  );
};

export default InstrumentFilterDropdown;
