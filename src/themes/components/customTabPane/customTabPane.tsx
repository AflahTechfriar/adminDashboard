import React, { ReactNode } from "react";
import styles from "./customTabPane.module.scss";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface TabData {
  key: string;
  title: ReactNode;
  component: React.ReactNode;
  onClick?: () => void;
}

interface CustomTabPaneProps {
  tabData: TabData[];
  onChange?: (key: string) => void;
}

const CustomTabPane = ({ tabData, onChange }: CustomTabPaneProps) => {
  const handleTabChange = (key: string) => {
    if (onChange) {
      onChange(key);
    }

    // Find the clicked tab and trigger its onClick function
    const clickedTab = tabData.find((tab) => tab.key === key);
    if (clickedTab && clickedTab.onClick) {
      clickedTab.onClick();
    }
  };

  return (
    <div className={`space-bottom-32`}>
      <Tabs
        className={styles.tabs}
        defaultActiveKey={tabData[0].key}
        tabPosition="top"
        onChange={handleTabChange}
      >
        {tabData.map((tab) => (
          <TabPane className={styles.tabPane} tab={tab.title} key={tab.key}>
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTabPane;
