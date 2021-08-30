import { useField } from 'formik';
import { useState } from 'react';
import { filterOptions } from '../components/Dropdowns/BaseDropdown/BaseDropdown';

export function useDropdown(name: string) {
  const [_, { value }, { setValue }] = useField(name);
  const [filterValue, setFilterValue] = useState('');

  const resetValue = () => {
    setValue('');
    setFilterValue('');
  };

  const filter: filterOptions = {
    isActive: true,
    initExpand: false,
    value: filterValue,
    update: setFilterValue,
    reset: () => resetValue(),
  };

  return {
    value,
    setValue,
    filterValue,
    setFilterValue,
    filter,
  };
}
