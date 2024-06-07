import React, { useEffect, useState } from "react";

import CustomTabPane from "@/themes/components/customTabPane/customTabPane";
import styles from "./settings.module.scss";
interface TabData {
    key: string;
    title: string;
    component: React.ReactNode;
}


export default function SettingsWrap() {
    const tabData: TabData[] = [
        {
            key: "tab1",
            title: "Account",
            component: '',
        },
        { key: "tab2", title: "Security", component: '' },
        {
            key: "tab3",
            title: "User management",
            component: '',
        },
        {
            key: "tab4",
            title: "Notifications",
            component: '',
        },
        { key: "tab5", title: "Integrations", component: '' },
        { key: "tab6", title: "Master lists", component: '' },
        { key: "tab7", title: "Referral codes", component: '' },
    ];

    return (
        <>
            <div className={styles.main}>
                <CustomTabPane tabData={tabData} />
            </div>
        </>
    );
}
