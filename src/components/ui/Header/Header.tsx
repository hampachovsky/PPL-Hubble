import { PostButton, UserAvatar } from "@/components";
import { paths } from "@/config";
import { AuthModal, useAuthModal, useUser } from "@/features/auth";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";

export const Header: React.FC = () => {
  const { currentModal, openAuthModal } = useAuthModal();
  const { isAuth, isPending } = useUser();
  const navigate = useNavigate();
  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 col-span-12 h-16 border-b border-gray-800 bg-gray-800",
          !isAuth && currentModal && "pointer-events-none"
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
                className="h-1/2 rounded-xl bg-cyan-800 p-2 text-white placeholder-slate-300 outline-none"
              />
              <button className="absolute inset-y-0 end-0 flex items-center pe-3">
                <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {isPending ? (
                <HeaderSkeleton />
              ) : isAuth ? (
                <div className="flex space-x-2">
                  <div>
                    <PostButton
                      onClick={() => navigate(paths.postEditor.getHref("new"))}
                    />
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
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ style: { background: "#363636", color: "#fff" } }}
        />
      </header>
    </>
  );
};

const HeaderSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center space-x-2">
      <div>
        <div className="inline-flex items-center rounded-md bg-gray-700 px-4 py-2 font-bold hover:bg-gray-400">
          <div className="hidden h-4 w-14 rounded bg-gray-200 md:block"></div>
        </div>
      </div>
      <div className="size-8 rounded-full bg-gray-200"></div>
    </div>
  );
};
