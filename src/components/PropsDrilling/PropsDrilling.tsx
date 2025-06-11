import React from "react";

type User = {
  name: string;
  age: number;
};

type ParentProps = {
  user: User;
};

export function PropDrilling() {
  const user = { name: "Alice", age: 31 };
  return <Parent user={user} />;
}

function Parent({ user }: ParentProps) {
  return <Child user={user} />;
}

function Child({ user }: ParentProps) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }: ParentProps) {
  return (
    <h1>
      Hello, {user.name}, you are now {user.age} years old! yeayy
    </h1>
  );
}

export default PropDrilling;
