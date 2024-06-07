import React from "react";
import styles from "./customTitle.module.css";

interface TitleProps {
  size?: "small" | "middle" | "large" | "extraLarge"; // Define size prop
  text: string;
  className?: string;
}

export default function CustomTitle({ size, text, className }: TitleProps) {
  return (
    <h2
      className={[
        styles.customTitle,
        className,
        size === "small" ? "small-title" : " ",
        size === "middle" ? "middle-title" : " ",
        size === "large" ? "large-title" : " ",
        size === "extraLarge" ? "extraLarge-title" : " ",
      ].join(" ")}
    >
      {text}
    </h2>
  );
}
