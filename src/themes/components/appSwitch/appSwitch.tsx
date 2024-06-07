
import React from "react";
import { Switch } from "antd";
import styles from "./appSwitch.module.scss";
import { SwitchSize } from "antd/es/switch";

interface CustomSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize ;
  label?: string;
  defaultChecked?:boolean;
  
}

const CustomSwitch = ({
  checked,
  onChange,
  size,
  label,
  defaultChecked,
}: CustomSwitchProps) => {
  return (
    
    <div className={styles.switch}>
      <Switch checked={checked} onChange={onChange} size={size} defaultChecked={defaultChecked}/>
      <span className={styles.switchLabel}>{label}</span>
    </div>
  );
};

export default CustomSwitch;
