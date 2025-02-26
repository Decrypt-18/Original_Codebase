import React from 'react';
import { Input as InputComponent } from 'antd';
import { InputProps } from 'antd/lib/input';

const Input: React.FunctionComponent<InputProps> = ({
  defaultValue,
  value,
  disabled,
  onChange,
  allowClear,
  placeholder,
}) => (
  <InputComponent
    defaultValue={defaultValue}
    value={value}
    disabled={disabled}
    onChange={onChange}
    allowClear={allowClear}
    placeholder={placeholder}
  />
);

export default React.memo(Input);
