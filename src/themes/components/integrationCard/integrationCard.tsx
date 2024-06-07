import { Col, Row } from "antd";
import styles from "./integrationCard.module.css";
import AppCardLayout from "../appCardLayout/appCardLayout";
import AppToggleButton from "../appToggleButton/appToggleButton";
import { SwitchChangeEventHandler } from "antd/es/switch";
import CustomTitle from "../appTitles/customTitles";
import Image, { StaticImageData } from "next/image";
import googleDrive from "../../images/google-drive.png";
import linkedIn from "../../images/linkedin-alt.png";
import notion from "../../images/notion.png";
import launchrock from "../../images/launchrock.png";
import monday from "../../images/monday.png";

interface integrationCardProps {
  appName:
    | "Google Drive"
    | "LinkedIn"
    | "Launchrock"
    | "Monday.com"
    | "Notion"
    | string;
  toggleButtonOnClick?: SwitchChangeEventHandler;
}

export default function IntegrationCard({
  appName,
  toggleButtonOnClick,
}: integrationCardProps) {
  // Function to generate logo source based on app name
  const getLogoSrc = (appName: string): StaticImageData | string => {
    switch (appName) {
      case "Google Drive":
        return googleDrive;
      case "LinkedIn":
        return linkedIn;
      case "Monday.com":
        return monday;
      case "Notion":
        return notion;
      case "Launchrock":
        return launchrock;
      default:
        return "";
    }
  };

  return (
    <AppCardLayout>
      <div className={styles.integration_card}>
        <Row justify="space-between" align="middle">
          <Col flex="auto">
            <div className={styles.logo_container}>
              <Image
                src={getLogoSrc(appName)}
                alt={appName}
                className={styles.logo}
              />
            </div>
          </Col>
          <Col>
            <AppToggleButton handleClick={toggleButtonOnClick} />
          </Col>
        </Row>
        <div className={styles.integration_card_content}>
          <CustomTitle text={appName} size="small" />
          <p className={styles.integration_card_passage}>
            Manage all your integrations and <br></br> app connections.
          </p>
        </div>
      </div>
    </AppCardLayout>
  );
}
