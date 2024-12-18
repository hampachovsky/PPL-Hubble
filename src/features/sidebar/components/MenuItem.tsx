import { ROUTES } from "@/features/navigation";
import React from "react";
import { Link } from "react-router";

interface MenuItemProps {
  text: string;
  Icon: React.ElementType;
}
export const MenuItem: React.FC<MenuItemProps> = ({ text, Icon }) => {
  return (
    <Link to={ROUTES.HOME}>
      <div
        data-tooltip-id="menu-text"
        data-tooltip-content={text}
        className="group relative flex items-center space-x-2 rounded-sm p-2 hover:bg-gray-600"
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <h3 className="truncate">{text}</h3>
      </div>
    </Link>
  );
};
