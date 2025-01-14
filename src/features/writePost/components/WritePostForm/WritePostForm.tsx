import { FormInput, PostButton } from "@/components";
import { Editor } from "@/features/editor";
import React, { useCallback, useState } from "react";

export const WritePostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTitle(e.target.value);
    },
    []
  );
  return (
    <div className="lg:wh-48 w-full px-1">
      <h1 className="mb-4 text-white">Create a new post</h1>
      <div className="mb-2 flex flex-wrap items-start justify-between rounded-md bg-stone-700 p-4">
        <div className="flex w-full flex-col space-y-4 md:w-3/4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex w-full flex-col space-y-2 md:flex-1 md:flex-row md:space-x-4 md:space-y-0">
            <FormInput
              onChange={onChange}
              value={title}
              placeholder="Post title"
              width="full"
            />
            <select
              id="categories"
              defaultValue={"w0"}
              className="flex-1 rounded-md bg-stone-600 p-2.5 text-sm text-slate-200 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="w0">Choose a category</option>
              <option value="w1">1</option>
              <option value="w2">2</option>
              <option value="w3">3</option>
            </select>
          </div>

          <div className="flex w-full flex-wrap items-center space-x-2 md:w-auto">
            <h3 className="prose whitespace-nowrap text-neutral-200">
              Pick image:
            </h3>
            <input type="file" style={{ display: "none" }} id="fileInput" />
            <label
              htmlFor="fileInput"
              className="cursor-pointer rounded-md bg-stone-600 p-3 text-slate-200"
            >
              Browse...
            </label>
          </div>
        </div>

        <div className="mt-4 w-full md:mt-0 md:w-auto">
          <PostButton onClick={() => console.log("posted")} />
        </div>
      </div>

      <Editor />
    </div>
  );
};
