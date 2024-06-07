import style from "./otpInutField.module.scss";
import OTPInput from "react-otp-input";

interface TypeOtpProps {
  handleOtpChange: (otp: string) => void;
  value: string;
}
function OtpInutField({ handleOtpChange, value }: TypeOtpProps) {
  return (
    <>
      <div>
        <div className={style.otpContainer}>
          <OTPInput
            containerStyle={style.otpContent}
            value={value}
            numInputs={4}
            onChange={handleOtpChange}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
    </>
  );
}
export default OtpInutField;
