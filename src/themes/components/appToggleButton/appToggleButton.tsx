import { Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/es/switch";
import styles from "./appToggleButton.module.css";

interface ToggleButtonProps {
  initialValue?: boolean;
  handleClick?: SwitchChangeEventHandler;
}

const AppToggleButton: React.FC<ToggleButtonProps> = ({
  handleClick,
  initialValue,
}) => {

  return (
    <Switch
      className={styles.customSwitch}
      checked={initialValue}
      onChange={handleClick}
    />
  );
};

export default AppToggleButton;