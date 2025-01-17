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

export type PostCardType = Omit<Post, "content"> & {
  profile: Omit<Profile, "updated_at" | "background_url" | "status">;
  category: Omit<Category, "image_url" | "description" | "rules">;
};

export type Category = Entity<{
  id: string;
  name: string;
  icon_name: string;
  image_url: string;
  description: string;
  rules: string;
}>;
