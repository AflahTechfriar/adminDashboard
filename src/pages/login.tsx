import LoginView from "@/modules/auth/view/loginView";
import Head from "next/head";
import React from "react";

const login = () => {
  return (
    <div>
      <Head>
        <title>Vadnu | Login</title>
      </Head>
      <LoginView />
    </div>
  );
};

export default login;
