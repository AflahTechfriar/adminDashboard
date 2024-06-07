
import React from 'react';
import { Radio, RadioChangeEvent, Space } from 'antd';
import styles from './appRadioButton.module.css';

interface AppRadioButtonProps {
  direction?: 'horizontal' | 'vertical';
  handleChange?: (e: RadioChangeEvent) => void;
  value?: string | number;
  className?:string
  labelClass?:string;
  options: { value: string | number; label: string }[];
}

export default function AppRadioButton({ direction, handleChange, value, options,className , labelClass}: AppRadioButtonProps) {
  return (
    <>
      <Radio.Group onChange={handleChange} value={value} className={`${className?className:styles.CustomRadioButton} `}>
        <Space direction={direction}>
          {options.map(option => (
            <Radio
              key={option.value}
              value={option.value}
              className={`${labelClass} ${value === option.value ? styles.checkedRadio : ''}`}
            >
              {option.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
}
