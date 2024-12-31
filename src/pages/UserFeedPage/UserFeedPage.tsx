import React from "react";
import { Outlet } from "react-router";

export const UserFeedPage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center gap-8 px-4">
      <Outlet />
    </div>
  );
};
