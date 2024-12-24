import { paths } from "@/config/paths";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useNavigate } from "react-router";
export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 col-span-12 h-16 border-b border-gray-700 bg-slate-800">
      <div
        className="flex h-full items-center justify-between px-5 hover:cursor-pointer"
        onClick={() => navigate(paths.home.path)}
      >
        <div className="flex items-center text-xl font-bold">
          <BookmarkSquareIcon className="mr-1 h-6 w-6" />
          PPL-Hubble
        </div>
        <div className="flex items-center gap-4">
          <div className="relative mr-2">
            <input
              type="text"
              placeholder="Search..."
              className="h-1/2 rounded-xl bg-slate-500 p-2 text-white placeholder-slate-300 outline-none"
            />
            <button className="absolute inset-y-0 end-0 flex items-center pe-3">
              <MagnifyingGlassCircleIcon className="h-8 w-8 text-gray-400 hover:text-white" />
            </button>
          </div>
          <div>
            <Link to="/" className="hover:text-cyan-400">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
