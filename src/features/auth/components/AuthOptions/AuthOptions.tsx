import { useOAuthSignin } from "@/features/auth";
import React from "react";

interface AuthOptionsProps {
  text: "Sign in" | "Sign up";
  handleEmailAuth: () => void;
}

export const AuthOptions: React.FC<AuthOptionsProps> = ({
  handleEmailAuth,
  text,
}) => {
  const { oauthSignin } = useOAuthSignin();
  return (
    <>
      <button
        onClick={() => oauthSignin()}
        className="w-full rounded-md bg-cyan-600 px-4 py-2"
      >
        {text} with Google
      </button>
      <button
        onClick={handleEmailAuth}
        className="w-full rounded-md bg-slate-700 px-4 py-2"
      >
        {text} with Email
      </button>
    </>
  );
};
