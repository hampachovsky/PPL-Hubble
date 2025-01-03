import { paths } from "@/config";
import { AuthModal, useAuthModal } from "@/features/auth";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router";
import { UserAvatar } from "./UserAvatar";
export const Header: React.FC = () => {
  const { openAuthModal } = useAuthModal();
  const navigate = useNavigate();
  const isAuth = true;
  return (
    <header className="sticky top-0 z-50 col-span-12 h-16 border-b border-gray-800 bg-gray-800">
      <div className="flex h-full items-center justify-between px-5">
        <div
          className="flex items-center text-xl font-bold hover:cursor-pointer"
          onClick={() => navigate(paths.popular.path)}
        >
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
              <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
            </button>
          </div>
          <div>
            {isAuth ? (
              <div className="flex space-x-5">
                <UserAvatar userId="1" />
                <button className="flex items-center hover:text-cyan-400">
                  <Cog6ToothIcon className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal("login")}
                className="hover:text-cyan-400"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <AuthModal />
    </header>
  );
};
