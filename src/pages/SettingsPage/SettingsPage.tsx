import { Settings } from "@/features/settings";
import React from "react";

export const SettingsPage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center px-4">
      <Settings />
    </div>
  );
};
