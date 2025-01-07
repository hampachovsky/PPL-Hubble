import { UserAvatar } from "@/components";
import { paths } from "@/config";
import { AuthModal, useAuthModal } from "@/features/auth";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router";
export const Header: React.FC = () => {
  const { currentModal, openAuthModal } = useAuthModal();
  const navigate = useNavigate();
  const isAuth = false;
  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 col-span-12 h-16 border-b border-gray-800 bg-gray-800",
          currentModal && "pointer-events-none bg-gray-900"
        )}
      >
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
                className="h-1/2 rounded-xl bg-zinc-700 p-2 text-white placeholder-slate-300 outline-none"
              />
              <button className="absolute inset-y-0 end-0 flex items-center pe-3">
                <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {isAuth ? (
                <div className="flex space-x-2">
                  <div>
                    <button
                      onClick={() => navigate(paths.postEditor.getHref("new"))}
                      className="inline-flex items-center rounded-md bg-zinc-700 px-4 py-2 font-bold hover:bg-gray-400"
                    >
                      <PencilSquareIcon className="size-6" />
                      <span className="hidden md:block">Post</span>
                    </button>
                  </div>
                  <Link to={paths.profile.getHref("1")}>
                    <UserAvatar />
                  </Link>
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
    </>
  );
};
