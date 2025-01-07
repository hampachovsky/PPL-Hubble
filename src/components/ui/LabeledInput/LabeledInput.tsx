import { FormInput } from "@/components/ui/FormInput/FormInput";
import React from "react";

interface LabeledInputProps {
  label: string;
  type: string;
  placeholder: string;
  isTextarea?: boolean;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <h3 className="text-lg">{label}:</h3>
      <FormInput {...inputProps} />
    </div>
  );
};
