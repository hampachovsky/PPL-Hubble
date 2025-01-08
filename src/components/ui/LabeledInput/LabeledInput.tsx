import { UserAvatar } from "@/components";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import React from "react";

interface LabeledInputProps {
  label: string;
  type: string;
  placeholder: string;
  isTextarea?: boolean;
  imageUrl?: string;
  isAvatar?: boolean;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  imageUrl,
  isAvatar,
  ...inputProps
}) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="w-2/4">
        {isAvatar ? (
          <UserAvatar size="lg" />
        ) : imageUrl ? (
          <img src={imageUrl} className="size-20" alt={label} />
        ) : (
          <h3 className="text-lg">{label}:</h3>
        )}
      </div>
      <FormInput {...inputProps} width="full" />
    </div>
  );
};
