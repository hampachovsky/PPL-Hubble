import supabase from "@/lib/supabase";

export async function getCategoryPost() {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    console.error(error);
    throw new Error("post");
  }
  return data;
}
