import { ErrorMessage, UserAvatar } from "@/components";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface LabeledInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  isTextarea?: boolean;
  avatarUrl?: string;
  imageUrl?: string;
  isAvatar?: boolean;
  isBanner?: boolean;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  name,
  imageUrl,
  isAvatar,
  avatarUrl,
  isBanner = false,
  ...inputProps
}) => {
  const { control } = useFormContext();
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="w-2/4">
        {isAvatar ? (
          <UserAvatar
            size="lg"
            avatarURL={
              image ? URL.createObjectURL(image) : avatarUrl || undefined
            }
          />
        ) : imageUrl ? (
          <img
            src={image ? URL.createObjectURL(image) : imageUrl}
            className="size-20"
            alt={label}
          />
        ) : (
          <h3 className="text-lg">{label}:</h3>
        )}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {fieldState.error && (
              <ErrorMessage message={fieldState.error.message} />
            )}
            {isAvatar || isBanner ? (
              <>
                <input
                  style={{ display: "none" }}
                  id={`${name}-fileInput`}
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
                      setImage(file);
                    }
                  }}
                  ref={field.ref}
                />
                <label
                  htmlFor={`${name}-fileInput`}
                  className="cursor-pointer rounded-md bg-stone-600 p-3 text-slate-200"
                >
                  Browse...
                </label>
              </>
            ) : (
              <FormInput
                {...field}
                {...inputProps}
                width="full"
                ref={field.ref}
              />
            )}
          </>
        )}
      />
    </div>
  );
};
