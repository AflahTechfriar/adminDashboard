import React, { useState } from "react";
import { Card } from "antd";
import AppButton from "../appButton/appButton";
const { Meta } = Card;
import Image from "next/image";
import notify from "../../../themes/images/Ellipse 399.png";
import style from "./NotificationCard.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface NotificationProps {
  Profile_Avatar?: string | StaticImport | undefined;
  Message?: string;
  Time?: string;
  isRead?: boolean;
  onClick?: () => void;
}

const NotificationCards: React.FC<NotificationProps> = ({
  Profile_Avatar,
  Message,
  Time,
  isRead,
  onClick,
}) => {
  const [showButtons, setShowButtons] = useState(false);
  console.log("Profile:", Profile_Avatar);

  // Set the background color if read is true
  const cardBodyStyle = {
    backgroundColor: isRead ? "var(--cardSecondaryGray)" : "",
  };
  // function for setRead
  const handleClicked = () => {
    onClick;
  };
  const handleAccept = () => {
    // Handle the accept action here (e.g., mark notification as read)
    // You can call the onClick function or perform any other action
  };

  const handleReject = () => {
    // Handle the reject action here (e.g., delete notification)
    // You can call a different function or perform any other action
    // For now, let's just log a message
    console.log("Notification rejected");
  };

  return (
    <>
      <Card
        bodyStyle={cardBodyStyle}
        onClick={() => {
          setShowButtons(!showButtons);
          handleAccept();
        }}
        className={style.notificationCardWrap}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "1%" }}>
            <Image
              src={Profile_Avatar}
              alt="Picture of the author"
              className={style.notificationAvatar}
            />
          </div>
          <Meta title={Message} description={Time}></Meta>

          {showButtons && !isRead ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                gap: "2%",
              }}
            >
              <AppButton
                type="transparent-dark-magenta-outlined"
                size="small"
                text="Deny"
                handleClick={handleAccept}
              />
              <AppButton
                type="dark-magenta"
                size="small"
                text="Accept"
                handleClick={handleReject}
              />
            </div>
          ) : (
            !showButtons &&
            !isRead && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Image src={notify} alt="profile"></Image>
              </div>
            )
          )}
        </div>
      </Card>
    </>
  );
};
export default NotificationCards;
