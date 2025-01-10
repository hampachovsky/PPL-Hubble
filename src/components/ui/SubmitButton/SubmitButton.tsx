import clsx from "clsx";
import React from "react";

interface SubmitButtonProps {
  disabled?: boolean;
  text: string;
  width?: "full" | "unset";
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled = false,
  text,
  width = "full",
}) => {
  const buttonClass = clsx(
    "rounded-md px-4 py-2 text-white",
    disabled
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-cyan-600 hover:bg-cyan-700",
    width === "full" ? "w-full" : ""
  );

  return (
    <button type="submit" className={buttonClass} disabled={disabled}>
      {text}
    </button>
  );
};
