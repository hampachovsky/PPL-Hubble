import { FireIcon } from "@heroicons/react/20/solid";
import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src="https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="category banner"
          className="h-auto max-h-96 w-full object-cover"
        />
      </div>
      <div className="p-4">
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
    </>
  );
};