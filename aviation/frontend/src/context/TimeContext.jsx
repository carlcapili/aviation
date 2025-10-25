import { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <TimeContext.Provider value={{ currentTime, formattedDate, formattedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
