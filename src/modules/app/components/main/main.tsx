import React from "react";
import style from "./main.module.scss";

type MainProps = {
  setShrink: (value: boolean) => void;
  shrink: boolean;
  children: React.ReactNode;
  pageTitle: string;
};

export default function Main({
  shrink,
  children,
  pageTitle,
}: MainProps) {
  return (
    <div className={shrink ? style.ShrinkMain : style.main}>
      <div className={shrink ? style.ShrinkmainHead : style.mainHead}>
        <span>{pageTitle}</span>
      </div>
      <div className={style.mainBody}>{children}</div>
    </div>
  );
}
