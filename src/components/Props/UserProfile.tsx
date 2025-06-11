import React from "react";

type Address = {
  street: string;
  city: string;
  zip: string;
};

type UserProfileProps = {
  name?: string;
  age: number;
  address: Address;
  time?: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  name = "Guest",
  age,
  address: { street, city, zip },
  time,
}) => {
  return (
    <div style={{ backgroundColor: "red", color: "white" }}>
      <h1>Name : {name}</h1>
      <p>Age : {age}</p>
      <h2>Address : </h2>
      <p>
        {street},{city},{zip}
      </p>
      <p>{time}</p>
    </div>
  );
};

export default UserProfile;
