import { OutputData } from "@editorjs/editorjs";
import { User } from "@supabase/supabase-js";

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

export type ResourceType = {
  resource_type: "post" | "comment";
};

export type Post = Entity<{
  id: string;
  content: OutputData;
  status: PostStatus;
  title: string;
  image_url: string | null;
  category_id: number;
  author_id: Profile["user_id"];
}>;

export type ProfileDetailed = Profile & {
  subscriberCount: number;
  subscriptions: Array<{
    subscribed_id: string;
    subscribed_to_id: string;
    subscribed_to_details: Pick<Profile, "username" | "avatar_url">;
  }>;
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
};

export type Category = Entity<{
  id: string;
  name: string;
  icon_name: string;
  image_url: string;
  description: string;
  rules: string;
}>;

export type PostDetailRequest = {
  input_type: "bookmarks" | "category" | "all" | "profile";
  input_category_id: number | null;
  profile_user_id: string | null;
  input_user_id: string | null;
};
