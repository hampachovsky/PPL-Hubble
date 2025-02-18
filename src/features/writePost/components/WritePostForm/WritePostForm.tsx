import { FormInput, PostButton, Spinner } from "@/components";
import { paths } from "@/config";
import { useUser } from "@/features/auth";
import { useCategories } from "@/features/category";
import { Editor } from "@/features/editor";
import { useCreatePost } from "@/features/post";
import { useWritePostValidation } from "@/features/writePost";
import { OutputData } from "@editorjs/editorjs";
import React, { useCallback, useState } from "react";
import { Navigate } from "react-router";

const VALIDATION_MESSAGES = {
  imageSize: "Image size must be smaller than 5 MB",
  imageFormat: "Image must be jpeg format",
  category: "Choose category",
  title: "Enter post title",
  content: "Content must have at least 1 block",
} as const;

export const WritePostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<OutputData | null>(null);
  const [categoryId, setCategoryId] = useState("default0");
  const [image, setImage] = useState<File | null>(null);

  const { validateForm } = useWritePostValidation({
    title,
    content,
    categoryId,
    image,
    setImage,
  });

  const { categories, isPending } = useCategories();
  const { create, isCreated, isCreating } = useCreatePost();
  const { user } = useUser();
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTitle(e.target.value);
    },
    []
  );
  const handleChangeContent = useCallback((data: OutputData) => {
    setContent(data);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  if (!user) {
    return <Navigate to={paths.popular.path} />;
  }
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    create({
      author_id: user.id,
      category_id: +categoryId,
      title,
      content,
      image,
      status: "Published" as const,
    });
  };

  if (isCreated) return <Navigate to={paths.profile.getHref(user?.id)} />;
  if (isCreating) return <Spinner />;
  return (
    <div className="lg:wh-48 w-full px-1">
      <h1 className="mb-4 text-center text-xl font-bold text-white">
        Create a new post
      </h1>
      <div className="mb-2 flex flex-wrap items-start justify-between rounded-md bg-stone-700 p-4">
        <div className="flex w-full flex-col space-y-4 md:w-3/4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex w-full flex-col space-y-2 lg:flex-1 lg:flex-row lg:space-x-4 lg:space-y-0">
            <FormInput
              onChange={onChange}
              value={title}
              placeholder="Post title"
              width="full"
            />
            {isPending ? (
              <Spinner />
            ) : (
              <select
                id="categories"
                defaultValue={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="flex-1 rounded-md bg-stone-600 p-2.5 text-sm text-slate-200 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="default0">Choose a category</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="flex w-full flex-wrap items-center space-x-2 md:w-auto">
            <h3 className="prose whitespace-nowrap text-neutral-200">
              Pick image:
            </h3>
            <input
              onChange={handleFileChange}
              type="file"
              style={{ display: "none" }}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer rounded-md bg-stone-600 p-3 text-slate-200"
            >
              Browse...
            </label>
          </div>
        </div>

        <div className="mt-4 w-full md:mt-0 md:w-auto">
          <PostButton onClick={handleSubmit} />
        </div>
      </div>

      <Editor handleChangeContent={handleChangeContent} />
    </div>
  );
};
