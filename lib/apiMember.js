import supabase from "@/lib/supabase";

export async function getMembers() {
  const { data: members, error } = await supabase.from("members").select("*");

  return { members, error };
}
