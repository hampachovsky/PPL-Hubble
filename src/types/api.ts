import { User } from "@supabase/supabase-js";
import { DataProp } from "editorjs-blocks-react-renderer";

export type BaseEntity = {
  created_at: Date;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Profile = Entity<{
  user_id: User["id"];
  username: string;
  status: string;
  avatar_url: string;
  background_url: string;
  updated_at: Date;
}>;

export type PostStatus = {
  post_status: "Draft" | "Moderating" | "Published";
};

export type ResourceType = "post" | "comment";

export type Post = Entity<{
  id: number;
  content: DataProp;
  status: PostStatus;
  title: string;
  image_url: string | null;
  category_id: number;
  author_id: Profile["user_id"];
}>;

export type Comment = Entity<{
  id: number;
  text: string;
  author_id: Profile["user_id"];
  post_id: Post["id"];
  parent_id: number | null;
}>;

export type CommentDetailed = Comment & {
  is_liked: boolean;
  likes_count: number;
  profile: {
    user_id: Profile["user_id"];
    username: string;
    avatar_url: string | null;
  };
};

export type ProfileDetailed = Profile & {
  subscriberCount: number;
  subscriptions: Array<{
    subscribed_id: string;
    subscribed_to_id: string;
    subscribed_to_details: Pick<Profile, "username" | "avatar_url">;
  }>;
};

export type PostDetailedWithContent = PostDetailed & {
  content: Post["content"];
};

export type PostDetailed = Omit<Post, "content"> & {
  profile: Omit<Profile, "updated_at" | "background_url" | "status">;
  category: Omit<Category, "image_url" | "description" | "rules">;
  views_count: number;
  likes_count: number;
  comments_count: number;
  is_bookmarked: boolean;
  is_subscribed: boolean;
  is_liked: boolean;
  is_viewed: boolean;
};

export type Category = Entity<{
  id: number;
  name: string;
  icon_name: string;
  image_url: string;
  description: string;
  rules: string;
}>;

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
