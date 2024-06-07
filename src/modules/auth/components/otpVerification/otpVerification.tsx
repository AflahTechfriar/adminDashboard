import AppButton from "@/themes/components/appButton/appButton";
import styles from "./otpVerification.module.scss";
import CountDown from "@/themes/components/countDown/countDown";

import { useEffect, useState } from "react";
import OtpInutField from "@/themes/components/otpInutField/otpInutField";
import ModelDialogBox from "../../../../themes/components/dialogBox/dialogBox";
import ChangePassword from "../changePassword/changePassword";

export interface OtpInterface {
  email: string | undefined;
  tempToken: string | undefined;
}

const OtpVerification = ({ email, tempToken }: OtpInterface) => {
  const [time, setTime] = useState<number>(45);
  const [resend, setResend] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [showError, setShowError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [otp, setOtp] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    if (resend) {
      setTime(45);
    }
  }, [resend]);

  // close dialog box
  const modelClose = () => {
    setShowModel(false);
  };

  const handleOtpChange = (otp: string) => {
    const numericOtp = otp.replace(/\D/g, "");
    setOtp(numericOtp);
  };
  // Function to hide part of the email address
  function hideEmailAddress(email: string | undefined): string {
    if (!email) {
      throw new Error("Invalid email"); // Throw an error if email is undefined or null
    }

    const atIndex = email.indexOf("@");
    if (atIndex === -1) {
      return email; // If "@" is not found, return the original email
    }

    const prefixLength = Math.ceil(email.length / 3); // Calculate the length of prefix (one-third of the email)
    const prefix = "x".repeat(prefixLength); // Generate "x" characters to replace the first one-third of the email
    const suffix = email.slice(prefixLength); // Keep characters after the hidden part

    return prefix + suffix; // Return modified email
  }
  // validating otp
  const validateOTP = () => {
    setIsLoading(true);
    setShowError(""); // Reset error message
    if (otp === tempToken) {
      setIsVerified(true);
    } else {
      setShowError("Invalid OTP");
      setIsVerified(false);
    }
    setIsLoading(false);
  };

  // handle for resend otp
  const handleResendOTP = () => {
    setResend(true); // Change the state of resend here
    setTime(45); // Reset the countdown timer
    setShowModel(true);
  };

  // if otp valid render changepassword
  if (isVerified) {
    return <ChangePassword />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.globalWrap}>
          <div className={styles.Box}>
            <h1>Verification Code</h1>
            <div className={styles.content}>
              <div style={{ marginTop: "10px" }}></div>

              <p>Please enter the verification code send to your email ID</p>
              <span className={styles.Showemail}>
                {hideEmailAddress(email)}
              </span>
              <div style={{ marginTop: "30px" }}></div>
              <OtpInutField value={otp} handleOtpChange={handleOtpChange} />
              <CountDown time={time} setTime={setTime} setResend={setResend} />
              {showError && <div className={styles.errorText}>{showError}</div>}
              <div style={{ marginTop: "40px" }}></div>

              <AppButton
                text="Continue"
                type="dark-magenta"
                className="customButton"
                handleClick={validateOTP}
                isLoading={isLoading}
              />
              <div style={{ marginTop: "20px" }}></div>

              <span className={styles.lowText}>
                Haven’t received the code yet?
                <span
                  className={styles.ResendOtpText}
                  onClick={handleResendOTP}
                >
                  {" "}
                  Resend OTP {/* Resend otp button  */}
                </span>
              </span>
            </div>
          </div>
          <ModelDialogBox
            showModel={showModel}
            title="Code resent!"
            p1="A code has been resent to your email address"
            modelClose={modelClose}
            goto={() => {
              setShowModel(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
