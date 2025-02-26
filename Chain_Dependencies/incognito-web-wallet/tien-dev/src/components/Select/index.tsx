import React from 'react';
import { Select as SelectComponent } from 'antd';
import { SelectProps } from 'antd/lib/select';

const Select:React.FunctionComponent<SelectProps> = ({
  showSearch,
  placeholder,
  optionFilterProp,
  onChange,
  onFocus,
  onBlur,
  onSearch,
  filterOption,
  children,
}) => (
  <SelectComponent
    showSearch={showSearch}
    placeholder={placeholder}
    optionFilterProp={optionFilterProp}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={filterOption}
  >
    {children}
  </SelectComponent>
);

export const SelectOption = SelectComponent.Option;

export default Select;
