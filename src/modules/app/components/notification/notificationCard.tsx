import React, { useState } from "react";
import styles from "./notificationCard.module.scss";
import NotificationCards from "@/themes/components/NotificationCard/NotificationCard";
import profile from "../../../../themes/images/notify_Profile.png";
export default function NotificationCard() {
  const [read, setRead] = useState(false); // if true notification bg color will change to gray
  return (
    <div className={styles.notificationCardWrapper}>
      <NotificationCards
        Profile_Avatar={profile}
        Message="You have 16 new job applications"
        Time="1Hour ago"
        isRead={read}
      />
      <NotificationCards
        Profile_Avatar={profile}
        Message="Hello World"
        Time="3days ago"
        isRead={true}
      />
    </div>
  );
}
