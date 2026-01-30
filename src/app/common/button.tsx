"use client";
import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
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
  onClick
}) => {
  const colorProperties = isPrimarySolid
    ? `text-white bg-[#3A3042] ${
        !isLoading ? "hover:bg-white hover:text-black hover:border-[#3A3042]" : ""
      }`
    : "custom-button bg-white text-black";

  const spacing = size === "md" ? "py-1.5 px-3.5" : "px-8 py-3";
  
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    } else if (type === "button" && link && link.length > 0) {
      window.open(link, "_blank");
    }

    return undefined
  }
  return (
    <button
      className={`border-2 border-transparent text-lg text-center ${colorProperties} ${spacing} ${
        fullWidth ? "w-full" : ""
      }`}
      type={type}
      onClick={onClickHandler}
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
