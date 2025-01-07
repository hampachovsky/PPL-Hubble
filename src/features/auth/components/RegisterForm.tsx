import { FormInput } from "@/components";
import { AuthOptions, authPaths, useEmailAuth } from "@/features/auth";
import React from "react";
import { Link } from "react-router";

export const RegisterForm: React.FC = () => {
  const { emailAuth, handleEmailAuth } = useEmailAuth();

  return (
    <div>
      <h2 className="mb-4 text-center text-lg font-bold">Register</h2>
      <div className="flex flex-col gap-4">
        {emailAuth ? (
          <>
            <FormInput placeholder="Email" width="full" />
            <FormInput placeholder="Username" width="full" />
            <FormInput placeholder="Password" width="full" />
            <FormInput placeholder="Confirm Password" width="full" />

            <button className="w-full rounded-md bg-cyan-600 px-4 py-2">
              Submit
            </button>
          </>
        ) : (
          <AuthOptions handleEmailAuth={handleEmailAuth} text="Sign up" />
        )}
        <h3 className="text-center">
          Already have an account?{" "}
          <Link to={`?modal=${authPaths.login}`} className="text-cyan-400">
            Log in
          </Link>
        </h3>
      </div>
    </div>
  );
};
