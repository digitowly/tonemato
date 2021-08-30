import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentDropdown: React.FC<DropdownExtendProps> = ({ name }) => {
  const { data } = useListInstrumentsQuery();
  const { value, setValue } = useDropdown(name);

  return (
    <BaseDropdown name={name}>
      {data &&
        data.instruments.map((instrument) => (
          <FormDropdownOption
            isActive={instrument.name === value}
            key={instrument.id}
            onClick={() => setValue(instrument.name)}>
            {instrument.name}
          </FormDropdownOption>
        ))}
    </BaseDropdown>
  );
};

export default InstrumentDropdown;
