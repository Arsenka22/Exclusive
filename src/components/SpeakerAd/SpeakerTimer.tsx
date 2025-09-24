import { useState, useEffect } from "react";

export const SpeakerTimer = () => {
  const [seconds, setSeconds] = useState(58);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [active, setActive] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active && !ended) {
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          setEnded(true);
          setActive(false);
          return;
        }
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
              }
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [active, days, hours, minutes, seconds, ended]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="speaker-timer flex gap-3 items-center h-[62px]">
      {ended ? (
        <div className="text-white flex gap-[10px] items-center text-lg font-semibold">
          Sale ended
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center rounded-full p-2 bg-white w-[62px] h-[62px]">
            <span className="text-lg font-semibold leading-none">{days}</span>
            <span className="text-xs text-gray-600 mt-1">days</span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-full p-2 bg-white w-[62px] h-[62px]">
            <span className="text-lg font-semibold leading-none">{hours}</span>
            <span className="text-xs text-gray-600 mt-1">hours</span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-full p-2 bg-white w-[62px] h-[62px]">
            <span className="text-lg font-semibold leading-none">
              {minutes}
            </span>
            <span className="text-xs text-gray-600 mt-1">minutes</span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-full p-2 bg-white w-[62px] h-[62px]">
            <span className="text-lg font-semibold leading-none">
              {seconds}
            </span>
            <span className="text-xs text-gray-600 mt-1">seconds</span>
          </div>
        </>
      )}
    </div>
  );
};
