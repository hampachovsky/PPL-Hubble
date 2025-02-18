import { PencilSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

interface PostButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PostButton: React.FC<PostButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center rounded-md bg-cyan-800 px-4 py-2 font-bold hover:bg-gray-400"
    >
      <PencilSquareIcon className="size-6" />
      <span className="hidden md:block">Post</span>
    </button>
  );
};
