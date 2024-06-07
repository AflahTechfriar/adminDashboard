import Image from "next/image";
import styles from "./logSideBar.module.scss";
import bgNet from "@/themes/images/net.svg";
import VadnuBlack from "@/themes/images/Assets/vadnuLogoBlack.svg";
import boxes from "@/themes/images/Assets/boxGroup.svg";
import underline from "@/themes/images/Assets/tagUnderline.svg";
import Link from "next/link";

const LoginSideBar = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={bgNet} alt="background" className={styles.bgImage}></Image>
      <div className={styles.head}>
        <Link href={"/login"} className={styles.link}>
          {" "}
          <span className={styles.logoSection}>
            <Image
              src={VadnuBlack}
              alt="vadnu"
              className={styles.vadnuLogo}
            ></Image>
            <span className={styles.vadnuText}>Vadnu</span>
          </span>
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyHead}>
          <h1 className={styles.HeadTextSpecial}>Make your next hire easy,</h1>
          <h1 className={styles.HeadText}>find the best talent!</h1>
          <Image
            className={styles.underline}
            src={underline}
            alt="find the best talent!"
          ></Image>
        </div>
        <div className={styles.bodyContent}>
          <Image src={boxes} alt="comments" className={styles.boxImage}></Image>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
