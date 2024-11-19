import supabase from "@/lib/supabase";

export async function getTasks() {
  const { data: tasks, error } = await supabase.from("tasks").select("*");

  return { tasks, error };
}

export async function getMyTask() {
  const { data: tasks_to_me, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("assign_to", 1);

  return { tasks_to_me, error };
}

export async function getCompletedTask() {
  const { data: completed_task, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("completed", true);

  return { completed_task, error };
}

export async function myPending() {
  const { data: my_pending, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("assign_to", 1)
    .eq("completed", false);

  return { my_pending, error };
}
