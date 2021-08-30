import React from 'react';
import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentFilterDropdown: React.FC<DropdownExtendProps> = ({
  name,
  preFilter,
}) => {
  const { data } = useListInstrumentsQuery();
  const { filter, value, setValue } = useDropdown(name);

  return (
    <BaseDropdown filter={filter} name={name} config={{ initExpand: false }}>
      {data &&
        data.instruments
          .filter((instrument) => !preFilter.includes(instrument.name))
          .filter((instrument) => instrument.name.startsWith(filter.value))
          .map((instrument) => (
            <FormDropdownOption
              isActive={instrument === value}
              key={instrument.id}
              onClick={() => setValue(instrument)}>
              {instrument.name}
            </FormDropdownOption>
          ))}
    </BaseDropdown>
  );
};

export default InstrumentFilterDropdown;
