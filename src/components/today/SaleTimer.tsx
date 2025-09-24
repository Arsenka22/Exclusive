import { useState, useEffect } from "react";

export const SaleTimer = () => {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
        if (minutes === 0 && seconds === 0) {
          setMinutes(59);
          setHours(hours - 1);
        }
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setHours(23);
          setMinutes(59);
          setSeconds(59);
          setDays(days - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting, days, hours, minutes, seconds]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCounting(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="timer-container flex justify-center max-w-[302px] w-full">
      <div className="text-black flex gap-[10px] items-center">
        <span className="flex flex-col items-center justify-center text-center">
          <p className="text-[12px] font-bold">Days</p>
          <p className="text-[32px] font-bold">{days}</p>
        </span>

        <span className="text-red-500 text-[32px] font-bold pt-3">:</span>

        <span className="flex flex-col items-center justify-center text-center">
          <p className="text-[12px] font-bold">Hours</p>
          <p className="text-[32px] font-bold">{hours}</p>
        </span>

        <span className="text-red-500 text-[32px] font-bold pt-3">:</span>

        <span className="flex flex-col items-center justify-center text-center">
          <p className="text-[12px] font-bold">Minutes</p>
          <p className="text-[32px] font-bold">{minutes}</p>
        </span>

        <span className="text-red-500 text-[32px] font-bold pt-3">:</span>

        <span className="flex flex-col items-center justify-center text-center">
          <p className="text-[12px] font-bold">Seconds</p>
          <p className="text-[32px] font-bold">{seconds}</p>
        </span>
      </div>
    </div>
  );
};
