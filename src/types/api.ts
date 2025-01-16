import { OutputData } from "@editorjs/editorjs";
import { User } from "@supabase/supabase-js";

export type BaseEntity = {
  createdAt: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Profile = Entity<{
  user_id: User["id"];
  username: string;
  status: string;
  avatar: string;
  background_url: string;
  updated_at: string;
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
  image: string;
  categoryId: number;
  authorId: Profile["user_id"];
}>;

export type Category = Entity<{
  id: string;
  name: string;
  icon_name: string;
  image: string;
  description: string;
  rules: string;
}>;
