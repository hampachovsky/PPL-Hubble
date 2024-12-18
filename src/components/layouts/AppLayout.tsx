import { Header } from "@/components";
import { Sidebar } from "@/features/sidebar";
import React from "react";
import { Outlet } from "react-router";

export const AppLayout: React.FC = () => {
  return (
    <div className="grid h-full min-h-screen grid-cols-12 grid-rows-[auto,1fr] bg-stone-900 text-teal-50">
      <Header />
      <Sidebar />
      <main className="col-span-10 row-span-2 flex justify-start overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
