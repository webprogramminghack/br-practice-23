type BoxProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`
          p-4 rounded-lg border border-gray-300
          ${className || ""}
        `}
    >
      {children}
    </div>
  );
};

export default Box;
