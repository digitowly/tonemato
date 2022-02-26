import React from 'react';
import { useGenresQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
    BaseDropdownElement,
    DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const GenreFilterDropdown: React.FC<DropdownExtendProps> = ({
    isEditMode,
    name,
    preFilter,
}) => {
    const { data } = useGenresQuery();
    const { filter, value } = useDropdown(name);

    return (
        <BaseDropdown
            isEditMode={isEditMode}
            filter={filter}
            name={name}
            config={{ initExpand: false }}>
            {data &&
                data.genres
                    .filter(genre => !preFilter.includes(genre.name))
                    .filter(genre => genre.name.startsWith(filter.value))
                    .map(genre => (
                        <BaseDropdownElement
                            key={genre.id}
                            value={genre}
                            name={name}>
                            <FormDropdownOption isActive={genre === value}>
                                {genre.name}
                            </FormDropdownOption>
                        </BaseDropdownElement>
                    ))}
        </BaseDropdown>
    );
};

export default GenreFilterDropdown;
