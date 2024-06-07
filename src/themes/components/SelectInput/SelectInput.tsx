import React from 'react';
import { Select } from 'antd';

interface SelectInputProps {
  options: { value: string | number; label: string }[];
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, placeholder }) => {
  return (
    <Select placeholder={placeholder}>
      {options.map(option => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectInput;
