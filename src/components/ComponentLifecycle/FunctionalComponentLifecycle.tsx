import React, { useState, useEffect } from "react";

const TimerCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Component Mounted");
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Component will unmount");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Component updated. Count : ", count);
  }, [count]);

  return <h1>Timer : {count}</h1>;
};

export default TimerCounter;
