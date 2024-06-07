import LoginSideBar from "../components/loginSideBar/LoginSideBar";
import LoginWrap from "../components/loginWrap/loginWrap";
import styles from "./loginView.module.scss";

const LoginView = () => {
  return (
    <main className={styles.wrapper}>
      <LoginSideBar />

      <LoginWrap />
    </main>
  );
};

export default LoginView;
