import AppButton from "@/themes/components/appButton/appButton";
import Image from "next/image";
import styles from "./dialogBox.module.scss";
import modelLogo from "@/themes/images/modelOpenLogo.svg";
import { Modal } from "antd";
import { Footer } from "antd/es/layout/layout";

interface ModelDialogBoxProps {
  showModel: boolean;
  title?: string;
  p1?: string;
  p2?: string;
  modelClose: () => void;
  goto: () => void;
}
const ModelDialogBox = ({
  showModel,
  title,
  p1,
  p2,
  modelClose,
  goto,
}: ModelDialogBoxProps) => {
  return (
    <>
      <Modal
        open={showModel}
        title={[
          <div
            key="title-logo"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image alt="" src={modelLogo}></Image>
          </div>,
          <div
            key="title"
            className={styles.ModelFooter}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2>{title}</h2>
          </div>,
          <div
            key={p1}
            className={styles.ModelFooter}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p>{p1}</p>
          </div>,
          <div
            key={p2}
            className={styles.ModelFooter}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p>{p2}</p>
          </div>,
        ]}
        centered
        onCancel={modelClose}
        footer={[
          <div
            key="footer"
            className={styles.ModelFooter}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <AppButton
              text="Ok"
              type="dark-magenta"
              size="large"
              className="customButton"
              handleClick={goto}
            />
          </div>,
        ]}
      ></Modal>
    </>
  );
};

export default ModelDialogBox;
