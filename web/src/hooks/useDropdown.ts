import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export type filterOptions = {
  isActive: boolean;
  initExpand?: boolean;
  list: any;
};

export function useDropdown(name: string, filter?: filterOptions) {
  const [isOpen, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [_, { value }, { setValue }] = useField(name);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useDetectOutsideClick(dropdownRef, () => setOpen(false));

  useEffect(() => {
    setOpen(false);
    if (filterRef && filter && filter.isActive) {
      filterRef.current.value = value;
    }
  }, [value]);

  /**
   * matches local state options with given array
   */
  useEffect(() => {
    filter && setFilteredOptions(filter.list);
  }, []);

  /**
   * filter options on updated filter value
   */
  useEffect(() => {
    filter &&
      filter.list &&
      setFilteredOptions(
        filter.list.filter((option) =>
          option.props.children.startsWith(filterValue)
        )
      );

    filter && console.log(filteredOptions, filterValue);

    // hide expand on empty value (if filter option is enabled)
    filter && !filter.initExpand && setOpen(filterValue !== '');
  }, [filterValue]);

  return {
    filterRef,
    dropdownRef,
    isOpen,
    setOpen,
    value,
    filterValue,
    setFilterValue,
    setValue,
    filteredOptions,
  };
}
