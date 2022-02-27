import React from 'react';
import { Genre } from '../../../generated/codegen_types';

import DropdownSelector from '../../Dropdowns/DropdownSelector/DropdownSelector';
import ListItem from '../../ListItem/ListItem';
import BassGuitar from '../../../icons/instruments/BassGuitar';
import GenreFilterDropdown from '../../Dropdowns/GenreFilterDropdown/GenreFilterDropdown';

interface GenreSelectorProps {
    genreData: Pick<Genre, 'name' | 'id'>[];
    name: string;
}

const GenreSelector: React.FC<GenreSelectorProps> = ({ genreData, name }) => {
    return (
        <div>
            <DropdownSelector
                name={name}
                dataList={genreData}
                isEditMode={true}
                renderDefault={formData =>
                    formData.map((inst, index) => (
                        <ListItem Before={BassGuitar} key={index}>
                            {inst.name}
                        </ListItem>
                    ))
                }
                renderEditable={(index, formData, isEditMode) => (
                    <GenreFilterDropdown
                        isEditMode={isEditMode}
                        name={`${name}.${index}`}
                        preFilter={[...formData.map((v: any) => v.name)]}
                    />
                )}
            />
        </div>
    );
};

export default GenreSelector;
