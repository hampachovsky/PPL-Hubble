import { FireIcon } from "@heroicons/react/20/solid";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="w-full rounded-md border border-gray-700 bg-stone-700 p-4 shadow">
      <div className="flex items-center gap-2">
        <FireIcon className="h-5 w-5 flex-shrink-0" />
        <h5 className="text-xl">Category 1</h5>
      </div>
      <div>
        <p className="text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatibus aliquid temporibus quidem minus non!
        </p>
      </div>
    </div>
  );
};
