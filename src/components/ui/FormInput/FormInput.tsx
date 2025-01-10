import clsx from "clsx";
import React, { forwardRef } from "react";

interface FormInputProps {
  type?: string;
  placeholder: string;
  width?: "full" | "auto";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
}

export const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(
  (
    {
      type = "text",
      placeholder,
      width = "auto",
      value = "",
      onChange,
      onBlur,
      isTextarea = false,
      ...rest
    },
    ref
  ) => {
    const inputClass = clsx(
      "rounded-md bg-stone-600 p-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring focus:border-cyan-500 md:w-auto",
      width === "full" ? "w-full" : "w-2/4"
    );

    return isTextarea ? (
      <textarea
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...rest}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref as React.Ref<HTMLInputElement>}
        {...rest}
      />
    );
  }
);

FormInput.displayName = "FormInput";
