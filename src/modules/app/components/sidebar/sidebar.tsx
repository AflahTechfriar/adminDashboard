import { Button } from "antd";
import Link from 'next/link';
import { UserOutlined } from "@ant-design/icons";
import Logo from "../../../../themes/images/Vadnu.svg";
import CandidatesLogo from "../../../../themes/images/Group.svg";
import shrinkBtn from "../../../../themes/images/arrow-left-back-square.svg";
import DocumentLogo from "../../../../themes/images/Items, Group, Elements.svg";
import CompaniesLogo from "../../../../themes/images/building-modern-4.svg";
import JobsLogo from "../../../../themes/images/suitcase-portfolio-1.svg";
import verificationLogo from "../../../../themes/images/Verified.svg";
import ReportLogo from "../../../../themes/images/user-profile-remove-square.svg";
import BillingLogo from "../../../../themes/images/Recipe, Bill, Send.svg";
import ReportsLogo from "../../../../themes/images/analytics-chart-square.svg";
import MessagesLogo from "../../../../themes/images/Messages, Chat.svg";
import settingLogo from "../../../../themes/images/settings.svg";
import notficationLogo from "../../../../themes/images/Notification.svg";
import style from "./sidebar.module.scss";
import unShrinkBtn from "../../../../themes/images/shrink_back.svg";
import profile from "@/themes/images/profile.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar } from "antd";

type SidebarProps = {
  setShrink: (value: boolean) => void;
  shrink: boolean;
};

export default function Sidebar({ setShrink, shrink }: SidebarProps) {
  // shrink button onclick event
  const shrinkButtonOnClick = () => {
    setShrink(true);
  };
  //  function for unshrink sidebar
  const unShrinkButtonOnClick = () => {
    setShrink(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {shrink ? (
        <div className={style.shrinkStyle}>
          <div className={style.headarea}>
            <div className={style.headLogo}>
            <Button className={style.shrinkbtn} onClick={unShrinkButtonOnClick}>
                <Image src={Logo} alt="Vadnu" width={20} height={20} />
            </Button>
            </div>
          </div>
          <div className={style.bodyarea}>
            <div className={style.bodycenter}>
              <ul>
                <li>
                <Link href="/admindashboard" passHref>
                  <Image
                    src={DocumentLogo}
                    alt="Dashboard"
                    width={20}
                    height={20}
                  />
                  </Link>
                </li>
                <li>
                  <Image
                    src={CandidatesLogo}
                    alt="Candidates"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={CompaniesLogo}
                    alt="Companies"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image src={JobsLogo} alt="Jobs" width={20} height={20} />
                </li>
                <li>
                  <Image
                    src={verificationLogo}
                    alt="Verification"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={ReportLogo}
                    alt="Reported"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={BillingLogo}
                    alt="Billing"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={ReportsLogo}
                    alt="Reports"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={MessagesLogo}
                    alt="Messaages"
                    width={20}
                    height={20}
                  />
                </li>
              </ul>
            </div>
            <div className={style.bodybottom}>
              <ul>
                <li>
                  <Image
                    src={settingLogo}
                    alt="Settings"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src={notficationLogo}
                    alt="Notification"
                    width={20}
                    height={20}
                  />
                </li>
                <li className={style.noMargin}>
                  <Image
                    src={profile || <UserOutlined />}
                    alt="Notification"
                    width={40}
                    height={40}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.normalStyle}>
          <div className={style.headarea}>
            <div className={style.headLogo}>
                <Image src={Logo} alt="Vadnu" width={20} height={20} />
              <Link href="/" passHref>
                <h1>Vadnu</h1>
              </Link>
            </div>
            <Button className={style.shrinkbtn} onClick={shrinkButtonOnClick}>
              <Image src={shrinkBtn} alt="shrink button" />
            </Button>
          </div>
          <div className={style.bodyarea}>
            <div className={style.bodycenter}>
              <ul>
                <li>
                  <Image
                    src={DocumentLogo}
                    alt="Dashboard"
                    width={20}
                    height={20}
                  />
                  <p>Dashboard</p>
                </li>
                <li>
                  <Image
                    src={CandidatesLogo}
                    alt="Candidates"
                    width={20}
                    height={20}
                  />
                  <p>Candidates</p>
                </li>
                <li>
                  <Image
                    src={CompaniesLogo}
                    alt="Companies"
                    width={20}
                    height={20}
                  />
                  <p>Companies</p>
                </li>
                <li>
                  <Image src={JobsLogo} alt="Jobs" width={20} height={20} />
                  <p>Jobs</p>
                </li>
                <li>
                  <Image
                    src={verificationLogo}
                    alt="Verification"
                    width={20}
                    height={20}
                  />
                  <p>Verification Queue</p>
                </li>
                <li>
                  <Image
                    src={ReportLogo}
                    alt="Reported"
                    width={20}
                    height={20}
                  />
                  <p>Reported accounts</p>
                </li>
                <li>
                  <Image
                    src={BillingLogo}
                    alt="Billing"
                    width={20}
                    height={20}
                  />
                  <p>Billing</p>
                </li>
                <li>
                  <Image
                    src={ReportsLogo}
                    alt="Reports"
                    width={20}
                    height={20}
                  />
                  <p>Reports and analytics</p>
                </li>
                <li>
                  <Image
                    src={MessagesLogo}
                    alt="Messaages"
                    width={20}
                    height={20}
                  />
                  <p>Messaages</p>
                </li>
              </ul>
            </div>
            <div className={style.bodybottom}>
              <ul>
                <li>
                  <Image
                    src={settingLogo}
                    alt="Settings"
                    width={20}
                    height={20}
                  />
                  <p>Settings</p>
                </li>
                <li>
                  <Image
                    src={notficationLogo}
                    alt="Notification"
                    width={20}
                    height={20}
                  />
                  <p>Notifications</p>
                </li>
                <li className={style.noMargin}>
                  <Image
                    src={profile || <UserOutlined />}
                    alt="Notification"
                    width={40}
                    height={40}
                  />
                  <div className={style.profileName}>
                    <p>Kurt Bunker</p>
                    <sub>bunkercurt@gmail.com</sub>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
