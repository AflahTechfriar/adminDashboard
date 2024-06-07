import { useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import style from "./appLayout.module.scss";
import Main from "../components/main/main";
interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function AppLayout({
  children,
  pageTitle,
}: Readonly<AppLayoutProps>) {
  const [shrink, setShrink] = useState(false);
  // shrink button onclick event
  return (
    <div>
      <div className={style.pageWrapper}>
        <Sidebar setShrink={setShrink} shrink={shrink} />
        <Main
          setShrink={setShrink}
          shrink={shrink}
          pageTitle={pageTitle as string}
        >
          {children}
        </Main>
      </div>
    </div>
  );
}

