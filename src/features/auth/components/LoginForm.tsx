import { AuthOptions, authPaths, useEmailAuth } from "@/features/auth";
import React from "react";
import { Link } from "react-router";

export const LoginForm: React.FC = () => {
  const { emailAuth, handleEmailAuth } = useEmailAuth();
  return (
    <div>
      <h2 className="mb-4 text-center text-lg font-bold">Login</h2>
      <div className="flex flex-col gap-4">
        {emailAuth ? (
          <>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="h-12 w-full rounded-lg bg-stone-600 p-4"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="h-12 w-full rounded-lg bg-stone-600 p-4"
            />
            <button className="w-full rounded-md bg-cyan-600 px-4 py-2">
              Submit
            </button>
          </>
        ) : (
          <AuthOptions handleEmailAuth={handleEmailAuth} text="Sign in" />
        )}
        <h3 className="text-center">
          Don’t have an account?{" "}
          <Link to={`?modal=${authPaths.register}`} className="text-cyan-400">
            Sign up
          </Link>
        </h3>
      </div>
    </div>
  );
};
