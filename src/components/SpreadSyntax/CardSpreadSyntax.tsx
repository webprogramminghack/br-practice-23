import React, { type CSSProperties } from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Opsional
  buttonText?: string; // Opsional
  onButtonClick?: () => void; // Opsional
  className?: string; // Untuk kelas Tailwind tambahan
}

export const CardSpreadSyntax: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
  className,
}) => {
  const styles: CSSProperties = {
    color: "red",
    fontSize: "100px",
    border: "1px solid black",
    width: "fit-content",
    padding: "10px",
  };
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 ${className}`}
    >
      {imageUrl && (
        <img
          className="w-full h-48 object-cover mb-4 rounded-md"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      {buttonText && onButtonClick && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}

      <h1
        style={{
          color: "red",
          fontSize: "100px",
          border: "1px solid black",
          width: "fit-content",
          padding: "10px",
        }}
      >
        HALO DUNIA
      </h1>

      <h1 style={styles}>HALO DUNIA</h1>
    </div>
  );
};
