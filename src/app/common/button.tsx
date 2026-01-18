"use client";
import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  link?: string;
  isPrimarySolid?: boolean;
  type?: "submit" | "button";
  fullWidth?: boolean;
  size?: "md" | "lg";
  isLoading?: boolean;
}> = ({
  children,
  link,
  isPrimarySolid = true,
  size = "md",
  fullWidth = false,
  type = "button",
  isLoading = false,
}) => {
  const colorProperties = isPrimarySolid
    ? `text-white bg-[#3A3042] ${
        !isLoading ? "hover:bg-white hover:text-black hover:border-[#3A3042]" : ""
      }`
    : "custom-button bg-white text-black";

  const spacing = size === "md" ? "py-1.5 px-3.5" : "px-8 py-3";
  return (
    <button
      className={`border-2 border-transparent text-lg text-center ${colorProperties} ${spacing} ${
        fullWidth ? "w-full" : ""
      }`}
      type={type}
      onClick={
        type === "button" ? () => window.open(link, "_blank") : undefined
      }
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
