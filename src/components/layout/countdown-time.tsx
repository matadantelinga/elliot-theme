"use client";

import React, { useEffect, useState } from "react";

interface iCountDownTimerProps {
  theme: "purple" | "lightgreen" | "blue";
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const [previous, setPrevious] = useState<number>(value);
  const [current, setCurrent] = useState<number>(value);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (value === current) return;
    setPrevious(current);
    setCurrent(value);
    setAnimating(true);
    const t = setTimeout(() => setAnimating(false), 300);
    return () => clearTimeout(t);
  }, [value, current]);

  return (
    <div className="relative w-full">
      <div
        className={`absolute flex justify-center items-center inset-0 transition-all duration-300 ease-out ${animating ? "-translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        {previous}
      </div>
      <div
        className={`absolute flex justify-center items-center inset-0 transition-all duration-300 ease-out ${animating ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      >
        {current}
      </div>
    </div>
  );
};

const CountDownItem = ({
  value,
  label,
  theme,
}: {
  value: number;
  label: string;
  theme: "purple" | "lightgreen" | "blue";
}) => {
  return (
    <>
      <div className="item">
        <div className={`text-c-${theme} font-bold uppercase mb-2`}>
          {label}
        </div>
        <div className="w-[53px] h-[45px] flex text-[24px] leading-none font-bold items-center justify-center text-center bg-[#1B1D0F] border border-white/10 rounded-md text-white">
          <AnimatedNumber value={value} />
        </div>
      </div>
    </>
  );
};

export const CountDownTimer: React.FC<iCountDownTimerProps> = ({ theme }) => {
  const [time, setTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 12,
    hours: 12,
    minutes: 12,
    seconds: 12,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        const { days, hours, minutes, seconds } = prev;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          return prev;
        }
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="text-white text-center pb-10">
        <div className="font-extrabold text-white text-xl mb-5">
          Time Remaining
        </div>
        <div className="flex gap-3 justify-center items-center">
          <CountDownItem value={time.days} label="Days" theme={theme} />
          <CountDownItem value={time.hours} label="Hours" theme={theme} />
          <CountDownItem value={time.minutes} label="Mins" theme={theme} />
          <CountDownItem value={time.seconds} label="Secs" theme={theme} />
        </div>
      </div>
    </>
  );
};
