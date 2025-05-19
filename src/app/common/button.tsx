"use client";
import React from "react";

const Button: React.FC<{
  text: string;
  link: string;
  isPrimarySolid?: boolean;
}> = ({ text, link, isPrimarySolid = true }) => {
  const colorProperties = isPrimarySolid
    ? "text-white bg-[#3A3042] hover:bg-white hover:text-black"
    : "custom-button bg-white text-black";
  return (
    <button
      className={`border text-center py-1 px-3.5 w-full rounded-full ${colorProperties}`}
      style={{
        border: "2px solid #3A3042",
      }}
      onClick={() => window.open(link, "_blank")}
    >
      {text}
    </button>
  );
};

export default Button;
