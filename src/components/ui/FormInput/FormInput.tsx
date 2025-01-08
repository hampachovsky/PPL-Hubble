import clsx from "clsx";
import React from "react";

interface FormInputProps {
  type?: string;
  placeholder: string;
  width?: "full" | "auto";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  width = "auto",
  isTextarea = false,
}) => {
  const inputClass = clsx(
    "rounded-md bg-stone-600 p-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring focus:border-cyan-500",
    width === "full" ? "w-full" : "w-2/4"
  );

  return (
    <>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className={inputClass}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={inputClass}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};
