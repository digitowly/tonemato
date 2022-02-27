import React from 'react';
import { Instrument } from '../../../generated/codegen_types';
import InstrumentFilterDropdown from '../../Dropdowns/InstrumentFilterDropdown/InstrumentFilterDropdown';
import DropdownSelector from '../../Dropdowns/DropdownSelector/DropdownSelector';
import ListItem from '../../ListItem/ListItem';

interface InstrumentSelectorProps {
    instrumentsData: Pick<Instrument, 'name' | 'id'>[];
    name: string;
}

const InstrumentSelector: React.FC<InstrumentSelectorProps> = ({
    instrumentsData,
    name,
}) => {
    return (
        <div>
            <DropdownSelector
                name={name}
                isEditMode={true}
                dataList={instrumentsData}
                renderDefault={formData =>
                    formData.map((inst, index) => (
                        <ListItem key={index}>{inst.name}</ListItem>
                    ))
                }
                renderEditable={(index, formData, isEditMode) => (
                    <InstrumentFilterDropdown
                        isEditMode={true}
                        name={`${name}.${index}`}
                        preFilter={[...formData.map((v: any) => v.name)]}
                    />
                )}
            />
        </div>
    );
};

export default InstrumentSelector;
