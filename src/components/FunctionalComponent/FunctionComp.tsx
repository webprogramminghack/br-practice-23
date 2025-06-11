import React from "react";

type GreetingWithFunctionProps = {
  name?: string;
};

const GreetingWithFunction: React.FC<GreetingWithFunctionProps> = ({
  name = "John",
}) => {
  return (
    <>
      <h1>Halo ini Function Component with {name}</h1>
    </>
  );
};

export const GreetingWithFunction2: React.FC<GreetingWithFunctionProps> = ({
  name = "John",
}) => {
  return (
    <>
      <h1>Halo ini Function Component with {name}</h1>
    </>
  );
};

export function GreetingWithFunction3() {
  return <></>;
}

export default GreetingWithFunction;
