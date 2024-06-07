import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { MouseEventHandler } from "react";
import styles from "./appButton.module.css";
import { SizeType } from "antd/lib/config-provider/SizeContext";

interface AppButtonProps {
  type?:
    | "dark-magenta"
    | "transparent-dark-magenta-outlined"
    | "black"
    | "gray"
    | "transparent-burgundy-400-outlined"
    | ButtonType;
  size?: "small" | "middle" | "large" | undefined;
  className?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  iconPosition?: string;
  isLoading?: boolean;
  block?: boolean;
}

export default function AppButton({
  type,
  size,
  className,
  handleClick,
  icon,
  text,
  disabled,
  iconPosition,
  isLoading,
  block,
}: Readonly<AppButtonProps>) {
  return (
    <Button
      block={block}
      disabled={disabled}
      className={[
        styles.customBtn,
        className,
        icon ? "btn-icon" : "",
        iconPosition === "right" ? styles.iconRight : "",
        type === "black" ? "ant-btn-black" : "",
        type === "dark-magenta" ? "ant-btn-dark-magenta" : "",
        type === "gray" ? "ant-btn-gray" : "",
        type === "transparent-dark-magenta-outlined"
          ? "ant-btn-transparent-dark-magenta-outlined"
          : "",
        type === "transparent-burgundy-400-outlined"
          ? "ant-btn-transparent-burgundy-400-outlined"
          : "",
      ].join(" ")}
      type={
        type !== "dark-magenta" &&
        type !== "transparent-dark-magenta-outlined" &&
        type !== "black" &&
        type !== "gray" &&
        type !== "transparent-burgundy-400-outlined"
          ? type
          : undefined
      }
      size={size as SizeType}
      onClick={handleClick}
      icon={icon}
      loading={isLoading}
    >
      {text}
    </Button>
  );
}
