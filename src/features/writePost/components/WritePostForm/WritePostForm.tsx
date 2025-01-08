import { Editor } from "@/features/editor";
import React from "react";

export const WritePostForm: React.FC = () => {
  return (
    <div className="w-full px-1 lg:w-3/4">
      <h1 className="mb-4 text-white">Create a new post</h1>
      <Editor />
    </div>
  );
};
