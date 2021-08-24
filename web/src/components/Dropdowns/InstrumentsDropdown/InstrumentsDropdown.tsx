import { ComponentType } from 'react';
import { css } from 'styled-components';
import { useListInstrumentsQuery } from '../../../generated/codegen_types';
import {
  withDropdown,
  BaseDropdownProps,
  DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';

const InstrumentDropdownElement: ComponentType<BaseDropdownProps> = withDropdown(
  {}
);

const InstrumentDropdown: React.FC<DropdownExtendProps> = ({ name }) => {
  const { data } = useListInstrumentsQuery();
  const instrumentNames =
    data?.instruments && data.instruments.map((instrument) => instrument.name);
  return <InstrumentDropdownElement name={name} options={instrumentNames} />;
};

export default InstrumentDropdown;
