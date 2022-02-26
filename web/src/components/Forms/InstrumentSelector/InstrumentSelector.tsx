import React from 'react';
import { Instrument } from '../../../generated/codegen_types';
import InstrumentFilterDropdown from '../../Dropdowns/InstrumentFilterDropdown/InstrumentFilterDropdown';
import { useUpdateInstruments } from '../../../hooks/user/useUpdateInstruments';
import DropdownSelector from '../../Dropdowns/DropdownSelector/DropdownSelector';
import ListItem from '../../ListItem/ListItem';
import BassGuitar from '../../../icons/instruments/BassGuitar';

interface InstrumentSelectorProps {
    instrumentsData: Pick<Instrument, 'name' | 'id'>[];
    onSubmit: (ids: number[]) => Promise<void>;
}

const InstrumentSelector: React.FC<InstrumentSelectorProps> = ({
    instrumentsData,
    onSubmit,
}) => {
    return (
        <div>
            <DropdownSelector
                dataList={instrumentsData}
                handleSubmit={onSubmit}
                renderDefault={formData =>
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
