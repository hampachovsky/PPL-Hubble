import React from "react";

export const PostCardContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">
        Post Title - A Comprehensive Analysis of the Solar System
      </h2>
      <div className="relative w-full">
        <img
          className="h-auto max-h-96 w-full object-cover"
          src="https://cdn.pixabay.com/photo/2024/09/02/19/21/ai-generated-9017753_1280.png"
          alt="Post Image"
        />
      </div>
    </div>
  );
};
