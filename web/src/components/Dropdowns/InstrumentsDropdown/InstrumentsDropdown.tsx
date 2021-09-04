import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
  BaseDropdownElement,
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const InstrumentDropdown: React.FC<DropdownExtendProps> = ({ name }) => {
  const { data } = useListInstrumentsQuery();
  const { value } = useDropdown(name);

  return (
    <BaseDropdown name={name}>
      {data &&
        data.instruments.map((instrument) => (
          <BaseDropdownElement value={instrument.name} name={name}>
            <FormDropdownOption
              isActive={instrument.name === value}
              key={instrument.id}>
              {instrument.name}
            </FormDropdownOption>
          </BaseDropdownElement>
        ))}
    </BaseDropdown>
  );
};

export default InstrumentDropdown;
