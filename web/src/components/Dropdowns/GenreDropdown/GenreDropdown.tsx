import { useGenresQuery } from '../../../generated/codegen_types';
import { useDropdown } from '../../../hooks/useDropdown';
import BaseDropdown, {
    BaseDropdownElement,
    DropdownExtendProps,
} from '../BaseDropdown/BaseDropdown';
import { FormDropdownOption } from '../BaseDropdown/BaseDropdown.style';

const GenreDropdown: React.FC<DropdownExtendProps> = ({ name, isEditMode }) => {
    const { data } = useGenresQuery();
    const { value } = useDropdown(name);

    return (
        <BaseDropdown isEditMode={isEditMode} name={name}>
            {data &&
                data.genres.map(genre => (
                    <BaseDropdownElement value={genre.name} name={name}>
                        <FormDropdownOption
                            isActive={genre.name === value}
                            key={genre.id}>
                            {genre.name}
                        </FormDropdownOption>
                    </BaseDropdownElement>
                ))}
        </BaseDropdown>
    );
};

export default GenreDropdown;
