import AppInput from "@/themes/components/input/appInput";
import styles from "./changePassword.module.scss";
import { useState } from "react";
import AppButton from "@/themes/components/appButton/appButton";
// import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from "antd";
import Link from "next/link";
import LoginWrap from "../loginWrap/loginWrap";
import ModelDialogBox from "@/themes/components/dialogBox/dialogBox";

const ChangePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);

  const [showModel, setShowModel] = useState<boolean>(false);
  const [conditions, setConditions] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const modelClose = () => {
    setShowModel(false);
    setConfirmPasswordError("");
  };

  const handleClicked = () => {
    if (conditions) {
      setIsLoading(true);
      if (!password || !confirmPassword) {
        setConfirmPasswordError("Empty field not allowed");
        setIsLoading(false);
        return;
      }
      // api calls
      setShowModel(true);
      setIsLoading(false);
    } else {
      return;
    }
  };

  // reset password button  click event handler
  const resetPassword = () => {
    setIsPasswordChanged(true);
  };
  if (isPasswordChanged) {
    return <LoginWrap />;
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.changePasswordWrapper}>
          <div className={styles.Box}>
            <h1>Enter new password</h1>

            <div className={styles.content}>
              <div style={{ marginTop: "10px" }}></div>

              <p>Password</p>
              <AppInput
                type="password"
                className="passInput"
                placeHolder="Enter your password"
                onChange={setPassword}
              />
              <div style={{ marginTop: "30px" }}></div>

              <p>Confirm Password</p>

              <AppInput
                type="Password"
                className="passwordInput"
                onChange={setConfirmPassword}
                placeHolder="Enter your password"
              />
              {confirmPasswordError && (
                <div className={styles.errorText}> {confirmPasswordError} </div>
              )}
              <div style={{ marginTop: "30px" }}></div>

              <span className={styles.agreeAccept}>
                <Checkbox
                  onChange={(e) => setConditions(e.target.checked)}
                  checked={conditions}
                />{" "}
                I agree and accept the{" "}
                <Link href={"/terms"} className={styles.agreeAcceptSpecial}>
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link
                  href={"/privacypolicy"}
                  className={styles.agreeAcceptSpecial}
                >
                  Privacy policy
                </Link>
              </span>

              <div style={{ marginTop: "40px" }}></div>
              {/* <ReCAPTCHA /> */}
              <AppButton
                text="Reset"
                type={conditions ? "dark-magenta" : "gray"}
                size={"large"}
                className="customButton"
                isLoading={isLoading}
                handleClick={handleClicked}
              />
            </div>
          </div>
          <ModelDialogBox
            showModel={showModel}
            title="Password changed!"
            p1="Your Password has been changed successfully."
            p2="Use your new password to log in."
            modelClose={modelClose}
            goto={resetPassword}
          />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
