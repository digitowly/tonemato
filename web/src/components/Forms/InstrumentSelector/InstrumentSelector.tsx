import React from 'react';
import { Instrument } from '../../../generated/codegen_types';
import InstrumentFilterDropdown from '../../Dropdowns/InstrumentFilterDropdown/InstrumentFilterDropdown';
import DropdownSelector from '../../Dropdowns/DropdownSelector/DropdownSelector';
import ListItem from '../../ListItem/ListItem';

interface InstrumentSelectorProps {
    instrumentsData: Pick<Instrument, 'name' | 'id'>[];
    name: string;
    isEditMode: boolean;
}

const InstrumentSelector: React.FC<InstrumentSelectorProps> = ({
    instrumentsData,
    name,
    isEditMode,
}) => {
    return (
        <div>
            <DropdownSelector
                name={name}
                isEditMode={isEditMode}
                dataList={instrumentsData}
                renderDefault={formData =>
                    formData.map((inst, index) => (
                        <ListItem key={index}>{inst.name}</ListItem>
                    ))
                }
                renderEditable={(index, formData, isEditMode) => (
                    <InstrumentFilterDropdown
                        isEditMode={isEditMode}
                        name={`${name}.${index}`}
                        preFilter={[...formData.map((v: any) => v.name)]}
                    />
                )}
            />
        </div>
    );
};

export default InstrumentSelector;
