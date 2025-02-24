import { paths } from "@/config";
import { usePostsSearch } from "@/features/post";
import { useDebounce } from "@/hooks/useDebounce";
import {
  MagnifyingGlassCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "../Spinner";

export const SearchInput: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const { posts, isPending } = usePostsSearch(debouncedSearchValue);
  console.log(posts);

  return (
    <div className="relative mr-2">
      <input
        type="text"
        placeholder="Search..."
        className="h-1/2 rounded-xl bg-cyan-800 p-2 text-white placeholder-slate-300 outline-none"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />
      <button className="absolute inset-y-0 end-0 flex items-center pe-3">
        {debouncedSearchValue ? (
          <XCircleIcon
            onClick={() => setSearchValue("")}
            className="h-6 w-6 text-gray-400 hover:text-cyan-400"
          />
        ) : (
          <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
        )}
      </button>

      {isOpen && debouncedSearchValue && (
        <div
          className="absolute mt-1 w-full rounded-lg bg-stone-700 shadow-lg ring-1 ring-black ring-opacity-5"
          onMouseLeave={() => setIsOpen(false)}
        >
          {isPending ? (
            <Spinner />
          ) : (
            <div className="py-1">
              {!posts || posts.length < 1 ? (
                <h1 className="text-md px-4 py-2 font-semibold">
                  No article found
                </h1>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="cursor-pointer px-4 py-2 text-sm text-neutral-200 hover:bg-stone-500"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(paths.post.getHref(post.id));
                    }}
                  >
                    {post.title}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
