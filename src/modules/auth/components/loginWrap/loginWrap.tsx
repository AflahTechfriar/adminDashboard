import AppInput from "@/themes/components/input/appInput";
import styles from "./loginWrap.module.scss";
import AppButton from "@/themes/components/appButton/appButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ForgotPassword from "../forgotPassword/forgotPassword";

const LoginWrap = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  // state for is User verifed
  const [isForgotPassword, setForgotPassword] = useState<boolean>(false);
  const redirectTo = useRouter().push;

  //validation
  const getUserAndVerify = () => {
    // you  can call your api here to verify the user and get the data
    setEmailError("");
    setPasswordError("");
    void redirectTo("/");
  };
  // Set showFogotPassword to true when clicking on "Forgot Password"
  const handleForgotPassword = () => {
    setForgotPassword(true);
  };
  // render forgotPassword page only when the user clicks on "Forgot  Password"
  if (isForgotPassword) {
    return <ForgotPassword />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.loginWrapper}>
          <div className={styles.Box}>
            <h1>Admin log-in</h1>

            <div className={styles.content}>
              <div style={{ marginTop: "10px" }}></div>

              <p>Email</p>
              <AppInput
                placeHolder="Enter your username / email"
                onChange={setEmail}
              />
              {emailError && (
                <div className={styles.errorText}>{emailError}</div>
              )}
              <div style={{ marginTop: "30px" }}></div>

              <span className={styles.container}>
                Password
                <span
                  className={styles.forgotPassword}
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </span>
              </span>
              <AppInput
                type="Password"
                className="passwordInput"
                placeHolder="Enter  your password"
                onChange={setPassword}
              />
              {passwordError && (
                <div className={styles.errorText}> {passwordError} </div>
              )}
              <div style={{ marginTop: "40px" }}></div>
              <AppButton
                text="Sign in"
                type="dark-magenta"
                size={"large"}
                className="customButton"
                handleClick={getUserAndVerify}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginWrap;
