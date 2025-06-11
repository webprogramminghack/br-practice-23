import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ title, children, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        ...rest.style,
      }}
    >
      {title}
      {children}
    </div>
  );
};

export default Card;
