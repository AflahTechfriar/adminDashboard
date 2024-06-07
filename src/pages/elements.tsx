import Head from "next/head";
import { Inter } from "next/font/google";
import AppLayout from "@/modules/app/layouts/appLayout";
import TextInput from "@/themes/components/input/appInput";
import RadioInput from "@/themes/components/radioButton/appRadioButton";
import SelectInput from "@/themes/components/SelectInput/SelectInput";
import SwitchInput from "@/themes/components/appSwitch/appSwitch";
import { useState } from "react";
import AppButton from "@/themes/components/appButton/appButton";
import AppCardLayout from "@/themes/components/appCardLayout/appCardLayout";
import NotificationCard from "@/modules/app/components/notification/notificationCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <>
      <Head>
        <title>Vadnu | common elements</title>
      </Head>
      <AppLayout pageTitle="Common elements">
        <h1>Input fields</h1>
        <TextInput placeHolder="Enter your username" type="text"  />
        <TextInput
          placeHolder="Enter your phonenumber"
          type="number"
          
        />
        <TextInput placeHolder="Enter your email" type="email"  />
        <RadioInput options={options} />
        <SelectInput placeholder="Select an option" options={options} />
        <div className="switch-container">
          <SwitchInput defaultChecked={switchValue} onChange={setSwitchValue} />
        </div>
        <br />
        <br />
        <hr />
        <h1>App button</h1>
        <AppButton
          text="click here"
          handleClick={() => {
            alert("clicked");
          }}
        />
        <br />
        <br />
        <hr />
        <h1>card layout</h1>
        <AppCardLayout title="test" description="this is a description">
          <span>this is childre nelement</span>
        </AppCardLayout>

        <NotificationCard />
        <br />
        <br />
        <hr />
        <h1>table</h1>
      </AppLayout>
    </>
  );
}
