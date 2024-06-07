import React, { useRef } from "react";
import { Input, InputRef } from "antd";
import styles from "./appInput.module.css";

interface AppInputProps {
  parentClass?: string;
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  placeHolder?: string;
  onChange?: (value: string) => void;
}

const AppInput: React.FC<AppInputProps> = ({
  parentClass,
  label,
  name,
  value,
  id,
  disabled,
  type,
  placeHolder,
  className,
  onChange,
}: AppInputProps) => {
  const inputRef = useRef<InputRef>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Call onChange prop if provided
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <Input
        id={id}
        type={type}
        disabled={disabled}
        name={name}
        className={styles.customInput}
        value={value}
        ref={inputRef}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </>
  );
};

export default AppInput;
