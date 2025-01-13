import supabase from "@/lib/supabase";

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    console.error(error);
    throw new Error("post");
  }
  console.log(data);
  return data;
}
