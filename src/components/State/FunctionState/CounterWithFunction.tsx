import React, { useState } from "react";

const CounterWithFunction: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isRight, setRight] = useState<string>("Left");

  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const handleRight = () => {
    setRight("Left");
  };

  return (
    <div className="m-32">
      <h1>Current Count : {count}</h1>
      <p>{isRight}</p>
      <button className="bg-amber-400" onClick={handleClick}>
        Increment
      </button>

      <button onClick={handleRight}>Left</button>
    </div>
  );
};

export default CounterWithFunction;
