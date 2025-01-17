import { paths } from "@/config";
import React from "react";
import { Link } from "react-router";

interface PostCardContentProps {
  title: string;
  image_url: string | null;
}

export const PostCardContent: React.FC<PostCardContentProps> = ({
  title,
  image_url,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white hover:cursor-pointer hover:text-cyan-400 hover:underline">
        <Link to={paths.post.getHref("1")}>{title}</Link>
      </h2>
      <div className="relative w-full">
        {image_url && (
          <img
            className="h-auto max-h-96 w-full object-cover"
            src={image_url}
            alt="Post Image"
          />
        )}
      </div>
    </div>
  );
};
