import { Comment } from "./api";

export type PostDetailRequest = {
  input_type: "bookmarks" | "category" | "all" | "profile" | "subscriptions";
  input_category_id: number | null;
  profile_user_id: string | null;
  input_user_id: string | null;
};

export type SinglePostDetailRequest = {
  input_post_id: number | null;
  input_user_id: string | null;
};

export type CreateCommentRequest = Omit<Comment, "id" | "created_at">;
