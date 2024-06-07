import style from "./countDown.module.scss";
import { useEffect } from "react";

interface TimerProps {
  setResend: (resend: boolean) => void;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}
function CountDown({ setResend, setTime, time }: TimerProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          setResend(true);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };
  return (
    <div>
      <p className={style["timerCount"]}>{formatTime(time)}</p>
    </div>
  );
}
export default CountDown;
