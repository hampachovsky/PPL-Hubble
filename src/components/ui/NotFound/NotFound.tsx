import { paths } from "@/config";
import React from "react";
import { Link } from "react-router";

export const NotFound: React.FC = () => {
  return (
    <section className="h-screen bg-stone-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-slate-400 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page.
          </p>
          <Link
            to={paths.popular.path}
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
