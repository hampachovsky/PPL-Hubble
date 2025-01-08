import { WritePostForm } from "@/features/writePost";
import React from "react";

export const PostEditorPage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center px-4">
      <WritePostForm />
    </div>
  );
};
