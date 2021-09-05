import React from 'react';
import { Instrument } from '../../../generated/codegen_types';
import InstrumentFilterDropdown from '../../Dropdowns/InstrumentFilterDropdown/InstrumentFilterDropdown';
import { useUpdateInstruments } from '../../../hooks/user/useUpdateInstruments';
import DropdownSelector from '../../Dropdowns/DropdownSelector/DropdownSelector';
import ListItem from '../../ListItem/ListItem';
import BassGuitar from '../../../icons/instruments/BassGuitar';

interface InstrumentSelectorProps {
  instrumentsData: Pick<Instrument, 'name' | 'id'>[];
}

const InstrumentSelector: React.FC<InstrumentSelectorProps> = ({
  instrumentsData,
}) => {
  const { handleUpdateInstruments } = useUpdateInstruments();

  return (
    <div>
      <DropdownSelector
        dataList={instrumentsData}
        handleSubmit={handleUpdateInstruments}
        renderDefault={(formData) =>
          formData.map((inst, index) => (
            <ListItem Before={BassGuitar} key={index}>
              {inst.name}
            </ListItem>
          ))
        }
        renderEditable={(index, formData, isEditMode) => (
          <InstrumentFilterDropdown
            isEditMode={isEditMode}
            name={`formData.${index}`}
            preFilter={[...formData.map((v: any) => v.name)]}
          />
        )}
      />
    </div>
  );
};

export default InstrumentSelector;
