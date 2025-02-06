import { useCreateComment } from "@/features/comment";
import React, { useEffect, useState } from "react";

interface CommentInputProps {
  postId: string;
  userId: string;
  parentId: number | null;
  handleClearReplyId: () => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  userId,
  postId,
  parentId,
  handleClearReplyId,
}) => {
  const [text, setText] = useState("");
  const { create, isCreating, isCreated } = useCreateComment(postId);

  useEffect(() => {
    if (isCreated) {
      setText("");
      handleClearReplyId();
    }
  }, [isCreated, handleClearReplyId]);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    if (!text.trim()) return;
    e.preventDefault();

    create({
      author_id: userId,
      post_id: +postId,
      parent_id: parentId,
      text,
    });
  };
  return (
    <div className="p-4">
      <textarea
        id="message"
        rows={4}
        className="block w-full rounded-md border border-stone-500 bg-stone-600 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Write your thoughts here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-end space-x-2 py-2">
        {parentId && (
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-gray-500 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-400 focus:ring-4 focus:ring-blue-900 disabled:bg-slate-600"
            onClick={handleClearReplyId}
          >
            Close
          </button>
        )}
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-cyan-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-400 focus:ring-4 focus:ring-blue-900 disabled:bg-slate-600"
          disabled={isCreating}
          onClick={handleSubmit}
        >
          Post comment
        </button>
      </div>
    </div>
  );
};
