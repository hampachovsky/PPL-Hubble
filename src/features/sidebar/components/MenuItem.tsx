import * as Icons from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";

interface MenuItemProps {
  text: string;
  iconName: string;
  path: string;
}
export const MenuItem: React.FC<MenuItemProps> = ({ text, iconName, path }) => {
  const Icon = Icons[iconName as keyof typeof Icons];
  return (
    <Link to={path}>
      <div
        data-tooltip-id="menu-text"
        data-tooltip-content={text}
        className="group relative flex items-center justify-center space-x-2 rounded-sm p-2 hover:bg-gray-600 sm:justify-start"
      >
        <Icon className="h-5 w-5 flex-shrink-0 text-cyan-600" />
        <h3 className="hidden truncate sm:block">{text}</h3>
      </div>
    </Link>
  );
};
