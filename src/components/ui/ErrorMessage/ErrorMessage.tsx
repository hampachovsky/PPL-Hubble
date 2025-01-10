import React from "react";

interface ErrorMessageProps {
  message: string | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="mt-1 text-sm text-red-500">{message}</p>;
};
