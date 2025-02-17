import { ErrorMessage, UserAvatar } from "@/components";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import React from "react";
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
  isBannner?: boolean;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  name,
  imageUrl,
  isAvatar,
  avatarUrl,
  isBannner = false,
  ...inputProps
}) => {
  const { control } = useFormContext();

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="w-2/4">
        {isAvatar ? (
          <UserAvatar size="lg" avatarURL={avatarUrl || undefined} />
        ) : imageUrl ? (
          <img src={imageUrl} className="size-20" alt={label} />
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
            {isAvatar || isBannner ? (
              <>
                <input
                  style={{ display: "none" }}
                  id={`${name}-fileInput`}
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
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
