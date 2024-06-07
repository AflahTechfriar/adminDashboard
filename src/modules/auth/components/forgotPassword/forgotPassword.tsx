import AppInput from "@/themes/components/input/appInput";
import styles from "./forgotPassword.module.scss";
import AppButton from "@/themes/components/appButton/appButton";
import { useState } from "react";
import ModelDialogBox from "../../../../themes/components/dialogBox/dialogBox";
import OtpVerification from "../otpVerification/otpVerification";

const ForgotPassword = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [showError, setShowError] = useState<string>("");
  const [showModel, setShowModel] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  //sample otp number
  const otpToken = "1234";

  // close dialog box
  const modelClose = () => {
    setShowModel(false);
    setShowError("");
  };

  // is verified email set true to show otp page
  const goToOtpPage = () => {
    setIsVerified(true);
  };

  // validate the email and send otp
  const sendResetLink = () => {
    // rewrite the funtion with  api call and response.error
    try {
      setIsLoading(true);
      if (email) {
        setIsLoading(false);
        setShowError("");
        setShowModel(true);
      } else {
        setShowError("Empty  field not allowed.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error occurred while sending OTP:", error);
      // Handle error, show error message, etc.
    }
  };
  // if email is verified and otp generated render otpVerification Page
  if (isVerified) {
    return <OtpVerification email={email} tempToken={otpToken} />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.globalWrap}>
          <div className={styles.Box}>
            <h1>Forgot Password</h1>
            <div className={styles.content}>
              <div style={{ marginTop: "10px" }}></div>

              <p>Email Address</p>
              <AppInput placeHolder="Enter your email" onChange={setEmail} />
              {showError && <div className={styles.errorText}>{showError}</div>}
              <div style={{ marginTop: "40px" }}></div>

              <AppButton
                text="Send reset link"
                type="dark-magenta"
                size="large"
                className="customButton"
                handleClick={sendResetLink}
                isLoading={isLoading}
              />
            </div>
          </div>
          <ModelDialogBox
            showModel={showModel}
            title="Email generated successfully!"
            p1="An email has been sent to the registered email"
            p2="address with a password set up link."
            modelClose={modelClose}
            goto={goToOtpPage}
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
