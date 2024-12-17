import React from "react";
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 col-span-12 h-16 border-b border-gray-700 bg-slate-800">
      <div className="flex h-full items-center justify-between px-5">
        <div className="text-xl font-bold">PPL-Hubble</div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-xl bg-slate-500 p-2 outline-none"
          />
          <div>Login</div>
        </div>
      </div>
    </header>
  );
};
