import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link, useSearchParams } from "react-router";
import { authPaths } from "../constants";

export const RegisterForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const emailAuth = searchParams.get("authOption");

  const handleEmailLogin = () => {
    searchParams.set("authOption", authPaths.emailAuth);
    setSearchParams(searchParams);
  };

  const handleBack = () => {
    searchParams.delete("authOption");
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="relative">
        {emailAuth && (
          <button
            onClick={handleBack}
            className="absolute left-[-14px] top-[-15px] text-gray-500 hover:text-gray-100"
            aria-label="Back"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
      </div>
      <h2 className="mb-4 text-center text-lg font-bold">Register</h2>
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
              type="text"
              id="username"
              placeholder="Username"
              className="h-12 w-full rounded-lg bg-stone-600 p-4"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="h-12 w-full rounded-lg bg-stone-600 p-4"
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="h-12 w-full rounded-lg bg-stone-600 p-4"
            />
            <button className="w-full rounded-md bg-cyan-600 px-4 py-2">
              Submit
            </button>
          </>
        ) : (
          <>
            <button className="w-full rounded-md bg-cyan-600 px-4 py-2">
              Sign Up with Google
            </button>
            <button
              onClick={handleEmailLogin}
              className="w-full rounded-md bg-slate-700 px-4 py-2"
            >
              Sign Up with Email
            </button>
          </>
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
